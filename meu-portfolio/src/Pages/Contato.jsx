import { useState } from 'react';

const Contato = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Formulário enviado:', formData);
        alert('Formulário enviado!'); 

        
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section className="flex flex-col items-center justify-center p-10 h-screen" style={{ backgroundColor: '#020617' }}>
            <h1 className="text-5xl font-bold text-yellow-400 mb-8">Contato</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2" htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2" htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2" htmlFor="message">Mensagem:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-200"
                        rows="4"
                        required
                    />
                </div>
                <button type="submit" className="w-full p-2 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 transition duration-200">
                    Enviar
                </button>
            </form>
        </section>
    );
};

export default Contato;
