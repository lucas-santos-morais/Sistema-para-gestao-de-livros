let editando = false;
let idEditando = null;

// Carregar livros
async function loadBooks() {
    try {
        const response = await fetch('http://localhost:8080/api/livro/listarLivro');
        const books = await response.json();
        renderBooks(books);
    } catch (error) {
        console.error('Erro ao carregar livros:', error);
        alert('Erro ao carregar livros!');
    }
}

// Renderizar livros na tela
function renderBooks(books) {
    const div = document.getElementById('livros');
    div.innerHTML = '';
    books.forEach(livro => {
        div.innerHTML += `
            <div class="livro">
                <h2>${livro.titulo}</h2>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><strong>Ano:</strong> ${livro.ano_publicacao}</p>
                <p><strong>Gênero:</strong> ${livro.genero}</p>
                <p><strong>ISBN:</strong> ${livro.isbn}</p>
                <img src="${livro.foto}" alt="Capa do livro" width="120"><br>
                <button class="btn-editar" onclick="preencherFormulario(${livro.id}, '${livro.titulo.replace(/'/g, "\\'")}', '${livro.autor.replace(/'/g, "\\'")}', ${livro.ano_publicacao}, '${livro.genero.replace(/'/g, "\\'")}', '${livro.isbn}', '${livro.foto.replace(/'/g, "\\'")}')">Editar</button>
                <button class="btn-deletar" onclick="deletarLivro(${livro.id})">Deletar</button>
            </div>
        `;
    });
}

// Preencher formulário para edição
function preencherFormulario(id, titulo, autor, ano_publicacao, genero, isbn, foto) {
    document.getElementById('formTitulo').innerText = 'Atualizar Livro';
    document.getElementById('btnCadastrar').innerText = 'Atualizar';
    document.getElementById('btnCancelar').style.display = 'inline';
    document.getElementById('idLivro').value = id;
    document.getElementById('titulo').value = titulo;
    document.getElementById('autor').value = autor;
    document.getElementById('ano_publicacao').value = ano_publicacao;
    document.getElementById('genero').value = genero;
    document.getElementById('isbn').value = isbn;
    document.getElementById('foto').value = foto;
    editando = true;
    idEditando = id;
}

// Limpar formulário
function limparFormulario() {
    document.getElementById('formTitulo').innerText = 'Cadastrar Novo Livro';
    document.getElementById('btnCadastrar').innerText = 'Cadastrar';
    document.getElementById('btnCancelar').style.display = 'none';
    document.getElementById('formCadastro').reset();
    document.getElementById('idLivro').value = '';
    editando = false;
    idEditando = null;
}

// Cadastrar ou atualizar livro
document.getElementById('formCadastro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const livro = Object.fromEntries(formData.entries());

    if (!editando) {
        // Cadastro
        try {
            const response = await fetch('http://localhost:8080/api/livro/cadastrarLivro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(livro)
            });

            if (response.ok) {
                alert('Livro cadastrado!');
                limparFormulario();
                loadBooks();
            } else {
                alert('Erro ao cadastrar!');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar!');
        }
    } else {
        // Atualização
        try {
            const response = await fetch(`http://localhost:8080/api/livro/atualizarLivro/${idEditando}`, {
                method: 'POST', // conforme seu controller
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(livro)
            });

            if (response.ok) {
                alert('Livro atualizado!');
                limparFormulario();
                loadBooks();
            } else {
                alert('Erro ao atualizar!');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao atualizar!');
        }
    }
});

// Cancelar edição
document.getElementById('btnCancelar').addEventListener('click', limparFormulario);

// Deletar livro
async function deletarLivro(id) {
    if (!confirm('Tem certeza que deseja deletar este livro?')) return;
    
    try {
        const response = await fetch(`http://localhost:8080/api/livro/deletarLivro/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Livro deletado!');
            loadBooks();
        } else {
            alert('Erro ao deletar!');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao deletar!');
    }
}

// Carregar livros automaticamente ao abrir a página
window.onload = loadBooks;
