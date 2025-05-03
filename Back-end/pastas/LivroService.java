package br.com.unifecaf.services;

import br.com.unifecaf.model.Livro;
import br.com.unifecaf.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    //Método para listar os livros
    public List<Livro> listarLivros() {
        return livroRepository.findAll();
    }

    //Método para salvar livro
    public Livro salvarlivro (Livro livro) {
        return livroRepository.save(livro);
    }

    //Método para deletar livro
    public void deletarLivro (int id) {
        livroRepository.deleteById(id);
    }
    //Método para atualizar livro
    public Livro atualizarLivro(Integer id, Livro livro) {
        Optional<Livro> livroExistente = livroRepository.findById(id);

        if (livroExistente.isPresent()) {
            Livro livroAtualizado = livroExistente.get();
            livroAtualizado.setTitulo(livro.getTitulo());
            livroAtualizado.setAutor(livro.getAutor());
            livroAtualizado.setGenero(livro.getGenero());
            livroAtualizado.setAno_publicacao(livro.getAno_publicacao());
            return livroRepository.save(livroAtualizado);
        } else {
            return null;
        }
    }
}
