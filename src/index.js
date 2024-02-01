let nomeHeroi = 'Naruto';
let pontos = 20000;

if (pontos <= 1000) {
   pontos = ('Ferro')
}
else if (pontos === 1001 || pontos <= 2000) {
   pontos = ('Bronze')
}
else if (pontos === 2001 || pontos <= 5000) {
   pontos = ('Prata')
}
else if (pontos === 5001 || pontos <= 7000) {
   pontos = ('Ouro')
}
else if (pontos === 7001 || pontos <= 8000) {
   pontos = ('Platina')
}
else if (pontos === 8001 || pontos <= 9000) {
   pontos = ('Ascedente')
}
else if (pontos >= 10001) {
   pontos = ('Radiante')
}
console.log("O Herói " + nomeHeroi + " está no nível " + pontos)
