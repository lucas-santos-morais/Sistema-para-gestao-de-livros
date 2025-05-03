package br.com.unifecaf.controller;

import br.com.unifecaf.model.Livro;
import br.com.unifecaf.repository.LivroRepository;
import br.com.unifecaf.services.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livro")
@CrossOrigin(origins = "http://127.0.0.1:5500",allowedHeaders = "*")
public class LivroController {

    @Autowired
    private LivroService livroService;

    //Endpoint para listar livro

    @GetMapping("/listarLivro")
    public List<Livro> listarLivros() {
        return livroService.listarLivros();
    }

    @PostMapping("/cadastrarLivro")
    public ResponseEntity<Livro> salvarLivro(@RequestBody Livro livro) {
        Livro newLivro = livroService.salvarlivro(livro);
        return ResponseEntity.status(HttpStatus.CREATED).body(livro);
    }

    @DeleteMapping("/deletarLivro/{id}")
    public ResponseEntity<Void> deletarLivro(@PathVariable int id) {
        livroService.deletarLivro(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }

    @PostMapping("/atualizarLivro/{id}")
    public ResponseEntity<Livro> atualizarLivro(@PathVariable Integer id, @RequestBody Livro livro) {
        Livro livroAtualizado = livroService.atualizarLivro(id, livro);

        if (livroAtualizado != null) {
            return ResponseEntity.ok(livroAtualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}


