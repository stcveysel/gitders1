const toyota_araba={
    marka:"toyota",
    model:"corolla",
    yil:2021,

};

console.log("yil", toyota_araba.yil);
toyota_araba.yil=2022;
console.log("yil degistirildi" , toyota_araba.yil);
console.log(toyota_araba.marka);
console.log(toyota_araba.model);
toyota_araba.renk="Beyaz";
console.log(toyota_araba);

const ogrenci={};
ogrenci.yas=12;
ogrenci.ad="Veysel";
ogrenci.sinif=6;
console.log("ogrenci", ogrenci);