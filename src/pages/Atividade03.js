import React, { useState, useCallback } from 'react';
import './Atividade03.css';

const Atividade03 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [analysisResults, setAnalysisResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleImageSelect = useCallback((event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
            setAnalysisResults(null);
            setError(null);
        }
    }, []);

    const analyzeImage = async () => {
        if (!selectedImage) return;

        setLoading(true);
        setError(null);

        try {
            // Primeiro, fazemos upload da imagem para o Cloudinary
            const formData = new FormData();
            formData.append('file', selectedImage);
            formData.append('upload_preset', 'ml_default');

            const uploadResponse = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            if (!uploadResponse.ok) {
                const errorData = await uploadResponse.json();
                throw new Error(errorData.error?.message || 'Erro ao fazer upload da imagem');
            }

            const uploadData = await uploadResponse.json();

            // Função para gerar a assinatura necessária para a API
            const generateSignature = async (publicId, timestamp) => {
                const message = `public_id=${publicId}&timestamp=${timestamp}${process.env.REACT_APP_CLOUDINARY_API_SECRET}`;
                const encoder = new TextEncoder();
                const data = encoder.encode(message);
                const hashBuffer = await crypto.subtle.digest('SHA-1', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                return hashHex;
            };

            // Agora fazemos a análise da imagem usando a API de análise do Cloudinary
            const timestamp = Math.round((new Date).getTime()/1000);
            const signature = await generateSignature(uploadData.public_id, timestamp);

            const analysisResponse = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/analyze`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                    body: JSON.stringify({
                        public_id: uploadData.public_id,
                        timestamp: timestamp,
                        signature: signature,
                        api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
                        moderation: true,
                        faces: true,
                        labels: true,
                        objects: true
                    })
                }
            );

            if (!analysisResponse.ok) {
                const errorData = await analysisResponse.json();
                throw new Error(errorData.error?.message || 'Erro ao analisar a imagem');
            }

            const analysisData = await analysisResponse.json();

            // Processando os resultados
            const results = {
                labels: analysisData.labels || [],
                objects: analysisData.objects || [],
                faces: analysisData.faces || [],
                moderation: analysisData.moderation || {},
                colors: analysisData.colors || []
            };

            setAnalysisResults(results);
        } catch (err) {
            setError(err.message);
            console.error('Erro na análise:', err);
        } finally {
            setLoading(false);
        }
    };

    const clearImage = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
        setAnalysisResults(null);
        setError(null);
    };

    return (
        <div className="image-analyzer">
            <h1>Analisador de Imagens</h1>

            <div className="upload-section">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="file-input"
                />
                {previewUrl && (
                    <div className="preview-container">
                        <img src={previewUrl} alt="Preview" className="image-preview" />
                        <button onClick={clearImage} className="clear-button">
                            Limpar
                        </button>
                    </div>
                )}
            </div>

            {selectedImage && (
                <button
                    onClick={analyzeImage}
                    disabled={loading}
                    className="analyze-button"
                >
                    {loading ? 'Analisando...' : 'Analisar Imagem'}
                </button>
            )}

            {error && <div className="error-message">{error}</div>}

            {analysisResults && (
                <div className="results-container">
                    <h2>Resultados da Análise</h2>
                    
                    {analysisResults.labels.length > 0 && (
                        <div className="result-section">
                            <h3>Categorias Detectadas</h3>
                            <ul>
                                {analysisResults.labels.map((label, index) => (
                                    <li key={index}>
                                        {label.name} (Confiança: {Math.round(label.confidence * 100)}%)
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {analysisResults.objects.length > 0 && (
                        <div className="result-section">
                            <h3>Objetos Detectados</h3>
                            <ul>
                                {analysisResults.objects.map((obj, index) => (
                                    <li key={index}>
                                        {obj.name} (Confiança: {Math.round(obj.confidence * 100)}%)
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {analysisResults.faces.length > 0 && (
                        <div className="result-section">
                            <h3>Faces Detectadas</h3>
                            <p>Número de faces: {analysisResults.faces.length}</p>
                        </div>
                    )}

                    {analysisResults.colors.length > 0 && (
                        <div className="result-section">
                            <h3>Cores Principais</h3>
                            <div className="color-palette">
                                {analysisResults.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="color-swatch"
                                        style={{ backgroundColor: color.hex }}
                                        title={`${color.name} (${Math.round(color.percentage * 100)}%)`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {analysisResults.moderation && (
                        <div className="result-section">
                            <h3>Classificação de Conteúdo</h3>
                            <ul>
                                {Object.entries(analysisResults.moderation).map(([key, value]) => (
                                    <li key={key}>
                                        {key}: {value ? 'Sim' : 'Não'}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Atividade03; 