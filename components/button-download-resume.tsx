'use client'
import { RiDownload2Fill } from 'react-icons/ri';
import { Button } from './ui/button'

export default function ButtonDownloadResume() {

    async function downloadPDF() {
        try {
            const response = await fetch('https://tdpicjcnerrhbfxjnwjp.supabase.co/storage/v1/object/sign/assets/CURRICULO%20AUGUSTO%20-%20FULL%20STACK.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvQ1VSUklDVUxPIEFVR1VTVE8gLSBGVUxMIFNUQUNLLnBkZiIsImlhdCI6MTczMjA2OTAzMSwiZXhwIjoxNzYzNjA1MDMxfQ.0F7zsjrrIsR64QQqtIZg-8j7eVMHZOi36Zx4BfxlXVE&t=2024-11-20T02%3A17%3A10.353Z', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/pdf',
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao baixar o PDF');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);  // Cria uma URL temporária para o blob
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Currículo Augusto Sousa.pdf'; // Define o nome do arquivo baixado
            document.body.appendChild(a); // Adiciona o link ao DOM
            a.click(); // Simula o clique no link para iniciar o download
            a.remove(); // Remove o link do DOM

        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <Button variant="secondary" onClick={downloadPDF} className='flex gap-2 items-center font-semibold uppercase max-md:w-full'>
            <RiDownload2Fill />
            <span className='mt-1 flex'>
                Currículo
            </span>
        </Button>
    )
}
