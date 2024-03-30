package br.sistgerircntpg.gerircntpg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sistgerircntpg.gerircntpg.model.ContaPagar;
import br.sistgerircntpg.gerircntpg.repositorio.ContaPagarRepositorio;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/contas")
//@Service
public class ContaPagarController {

    @Autowired
    private ContaPagarRepositorio repositorio;

    @GetMapping
    public List<ContaPagar> listarContas(){
            return repositorio.findAll();
    }

}