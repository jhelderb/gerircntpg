package br.sistgerircntpg.gerircntpg.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "tb_contas_pagar")
public class ContaPagar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_conta;

    @Column(nullable = false, length = 60)
    private String nm_conta;       // Nome da Conta a Pagar

    @Column(nullable = false)
    private Double vl_conta;       // Valor da Conta a Pagar

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dt_venci;         // Data de vencimento

    @Column(nullable = false)
    private Double tx_juros;       // Taxa de juros por dia de atraso

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dt_pagam;         // Data de pagamento


    /**
     * @param id_conta the id_conta to get
     */
    public Long getId() {
        return id_conta;
    }

    /**
     * @param id_conta the id_conta to set
     */
    public void setId(Long id) {
        this.id_conta = id;
    }

    /**
     * @param nm_conta the nm_conta to get
     */
    public String getNm_conta() {
        return nm_conta;
    }

    /**
     * @param nm_conta the nm_conta to set
     */
    public void setNm_conta(String nm_conta) {
        this.nm_conta = nm_conta;
    }

    /**
     * @param vl_conta the vl_conta to get
     */
    public Double getVl_conta() {
        return vl_conta;
    }

    /**
     * @param vl_conta the vl_conta to set
     */
    public void setVl_conta(Double vl_conta) {
        this.vl_conta = vl_conta;
    }

    public Date getDt_venci() {
        return dt_venci;
    }

    public void setDt_venci(Date dt_venci) {
        this.dt_venci = dt_venci;
    }

    public Double getTx_juros() {
        return tx_juros;
    }

    public void setTx_juros(Double tx_juros) {
        this.tx_juros = tx_juros;
    }

    public Date getDt_pagam() {
        return dt_pagam;
    }

    public void setDt_pagam(Date dt_pagam) {
        this.dt_pagam = dt_pagam;
    }

    public ContaPagar(String nm_conta, Double vl_conta, Date dt_venci, Double tx_juros, Date dt_pagam) {
        this.nm_conta = nm_conta;
        this.vl_conta = vl_conta;
        this.dt_venci = dt_venci;
        this.tx_juros = tx_juros;
        this.dt_pagam = dt_pagam;
    }
    
}
