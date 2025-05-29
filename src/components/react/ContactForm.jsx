// src/components/react/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'submitting'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // **Aquí es donde integrarías tu backend para enviar el email**
    // Por ahora, solo simular una espera
    try {
      // Ejemplo de cómo harías un fetch a una API (Node.js o Serverless Function)
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   setStatus('success');
      //   setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
      // } else {
      //   setStatus('error');
      // }

      // Simulación de éxito
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-8 rounded-lg shadow-xl space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-200 text-sm font-bold mb-2">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-200 text-sm font-bold mb-2">
          Mensaje:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 ${
          status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {status === 'success' && (
        <p className="text-green-400 mt-4 text-center">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 mt-4 text-center">Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>
      )}
    </form>
  );
};

export default ContactForm;