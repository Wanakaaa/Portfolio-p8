'use client';
import React, { useState } from 'react';
import TextInput from '../../components/contactForm/TextInput'
import TextareaInput from '@/components/contactForm/TextareaInput';
import { validateFormValues, submitForm, FormValues } from '../../components/contactForm/contactHelpers';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries()) as unknown as FormValues;

    // Reset les messages à chaque soumission
  setLoading(true);
  setSuccessMessage('');
  setErrorMessage('');

  // Validation des champs via la fonction `validateFormValues`
  const validationError = validateFormValues(formValues);
  if (validationError) {
    setErrorMessage(validationError);
    setLoading(false); // Arrêter le chargement si erreur détectée
    return;
  }

   // Si la validation passe, on soumet le formulaire
   const response = await submitForm(formValues);
   if (response.success) {
     setSuccessMessage(response.message);
     form.reset();
   } else {
     setErrorMessage(response.message);
   }
 
   setLoading(false);
 };

  return (
    
      <div className='border border-green-500 sm:w-[80%] w-full p-6 '>
        <form onSubmit={onSubmit} className="space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <TextInput label='Nom:' name='name' type='text' className="border p-2 w-full rounded-lg" />
            <TextInput label="Email:" name="email" type="email" className="border p-2 w-full rounded-lg" />
          </div>
          <TextareaInput label="Message:" name='message' />
          <div style={{ display: 'none' }}>
            <label>
              Leave this field empty:
              <input type="text" name="honeypot" />
            </label>
          </div>   
          <div className="flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Envoyer un message
            </button>
          </div>
    
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>

  );
}