const Sequelize = require("sequelize");
const db = require("../models/db");

console.log("linha 4 registerData.js")
const Aluna = db.define('aluna', {
    idAluna: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeAluna: {
        type: Sequelize.STRING(45),
    },
    cpfRgResponsavel: {
        type: Sequelize.STRING(11),
    },
    cpfRgAluna: {
        type: Sequelize.STRING(11),
    },
    nomeResponsavel: {
        type: Sequelize.STRING(45),
    }


},
{
    timestamps: false,
    freezeTableName: true

});

const Contato = db.define('contato', {
    idContato: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.ENUM('res', 'cel', 'com')
    },
    valor: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    fk_alunaContato: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true

});

const Despesa = db.define('despesa', {
    idDespesa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoDespesa: {
        type: Sequelize.STRING(30)
    },
    valor: {
        type: Sequelize.FLOAT(10,2)
    },
    numeroParcelas: {
        type: Sequelize.STRING(2)
    },
    fk_alunaDespesa: {
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
    freezeTableName: true

});

const Endereco = db.define('endereco', {
    idEndereco: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rua: {
        type: Sequelize.STRING(30)
    },
    numero: {
        type: Sequelize.STRING(10)
    },
    complemento: {
        type: Sequelize.STRING(35)
    },
    bairro: {
        type: Sequelize.STRING(25)
    },
    cidade: {
        type: Sequelize.STRING(25)
    },
    estado: {
        type: Sequelize.STRING(2)
    },
    fk_alunaEndereco: {
        type: Sequelize.INTEGER
    }
});

const Turma = db.define('turma', {
    idTurma: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true

});

const AlunaTurma = db.define('aluna_turma', {
    idAlunaTurma: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fk_idAluna: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fk_idTurma: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true

});

const Email = db.define('email', {
    idEmail: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    fk_alunaEmail: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true

});


Contato.belongsTo(Aluna, {foreignKey: 'fk_alunaContato'});
Despesa.belongsTo(Aluna, {foreignKey: 'fk_alunaDespesa'});
Endereco.belongsTo(Aluna, {foreignKey: 'fk_alunaEndereco'});
AlunaTurma.belongsTo(Aluna, {foreignKey: 'fk_idAluna'});
AlunaTurma.belongsTo(Turma, {foreignKey: 'fk_idTurma'});
Email.belongsTo(Aluna, {foreignKey: 'fk_alunaEmail'});

data = {
    Aluna,
    Contato,
    Despesa,
    Endereco,
    Turma,
    AlunaTurma,
    Email
};

module.exports = data
