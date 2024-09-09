document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;

        try {
            const response = await fetch('http://localhost:3000/pessoas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, cpf, telefone })
            });
            if (response.ok) {
                form.reset();
                alert('Pessoa adicionada com sucesso!');
            } else {
                alert('Erro ao adicionar pessoa');
            }
        } catch (error) {
            alert('Erro ao adicionar pessoa');
        }
    });
});
