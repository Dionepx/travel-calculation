let tipoCombustivel = 'Etanol'

const precoEtanol = 5.79
const precoGasolina = 6.66
const KmPorLitros = 10
const distanciaKM = 100

const litrosConsumidos = distanciaKM / KmPorLitros

if (tipoCombustivel === 'Etanol') {
     const valorGasto = distanciaKM * KmPorLitros
     console.log(valorGasto.toFixed(2))
} else {
     const valorGasto = distanciaKM * KmPorLitros
     console.log(valorGasto.toFixed(2))
}