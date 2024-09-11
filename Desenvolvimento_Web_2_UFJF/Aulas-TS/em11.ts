interface Ave{
    bico: string;
    asas: number;
    crista?: boolean;
    grasnar: () => void;
};

const pato: Ave ={
    asas: 55,
    bico: "amarelo",
    grasnar: function (){
        console.log("Quack");
    }
};

const galinha: Ave = {
    asas: 2,
    bico: "laranja",
    grasnar: function (){
        console.log("cocoricooo");
    }

}