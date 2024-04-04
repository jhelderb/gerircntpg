package br.sistgerircntpg.gerircntpg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RestController;

import br.sistgerircntpg.gerircntpg.model.ContaPagar;
import br.sistgerircntpg.gerircntpg.repositorio.ContaPagarRepositorio;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/contas")
//@Service
public class ContaPagarController {

    @Autowired
    private ContaPagarRepositorio repositorio;

    @GetMapping("/listacontas")
    public List<ContaPagar> listarContas(){
            return repositorio.findAll();
    }

    //@SuppressWarnings("null")
    @PostMapping("/incluiconta")
    public ContaPagar adicionar(@RequestBody ContaPagar cntPagar) {
        return repositorio.save(cntPagar);
    }

    @PutMapping("/alteraconta")
    public ContaPagar alterar(@RequestBody ContaPagar cntPagar) {
        if(cntPagar.getId()>0)
            return repositorio.save(cntPagar);
        return null;

    }

    @DeleteMapping("/deletaconta")
    public ContaPagar deletar(Long id) {
         repositorio.deleteById(id);
        return null;
    }

}
