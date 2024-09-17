// Definición de recetas
const recetas = {
    brownie: {
        "Porotos negros crudos": { cantidad: 60, unidad: 'g' },
        "Aceite": { cantidad: 100, unidad: 'cc' },
        "Agua": { cantidad: 150, unidad: 'cc' },
        "Huevo": { cantidad: 1, unidad: 'unidad' },
        "Vainilla": { cantidad: 12, unidad: 'cc' },
        "Avena": { cantidad: 70, unidad: 'g' },
        "Azúcar": { cantidad: 100, unidad: 'g' },
        "Almidón de maíz": { cantidad: 80, unidad: 'g' },
        "Polvo de hornear": { cantidad: 7, unidad: 'g' },
        "Cacao": { cantidad: 150, unidad: 'g' },
        "Sal": { cantidad: 1, unidad: 'g' }
    },
    budin: {
        "Huevos": { cantidad: 1, unidad: 'unidad' },
        "Harina": { cantidad: 140, unidad: 'g' },
        "Banana": { cantidad: 125, unidad: 'g' },
        "Azúcar": { cantidad: 90, unidad: 'g' },
        "Aceite": { cantidad: 70, unidad: 'cc' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Vainilla": { cantidad: 7.5, unidad: 'cc' }
    },
    faina: {
        "Huevos": { cantidad: 2, unidad: 'unidad' },
        "Harina": { cantidad: 160, unidad: 'g' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Leche": { cantidad: 120, unidad: 'cc' },
        "Agua": { cantidad: 50, unidad: 'cc' },
        "Aceite": { cantidad: 60, unidad: 'cc' },
        "Zanahoria": { cantidad: 125, unidad: 'g' },
        "Queso rallado": { cantidad: 50, unidad: 'g' },
        "Sal": { cantidad: 3, unidad: 'g' }
    },
    pastaFrola: {
        "Huevos": { cantidad: 1.5, unidad: 'unidad' },
        "Harina": { cantidad: 200, unidad: 'g' },
        "Azúcar": { cantidad: 65, unidad: 'g' },
        "Aceite": { cantidad: 55, unidad: 'cc' },
        "Polvo de hornear": { cantidad: 7.5, unidad: 'g' },
        "Ralladura de limón o naranja": { cantidad: 'c/n', unidad: '' },
        "Dulce de membrillo": { cantidad: 200, unidad: 'g' }
    },
    tortaBasica: {
        "Huevo": { cantidad: 2, unidad: 'unidad' },
        "Azúcar": { cantidad: 125, unidad: 'g' },
        "Aceite": { cantidad: 60, unidad: 'cc' },
        "Harina": { cantidad: 220, unidad: 'g' },
        "Polvo de hornear": { cantidad: 5, unidad: 'g' },
        "Leche": { cantidad: 160, unidad: 'cc' },
        "Vainilla": { cantidad: 3, unidad: 'cc' },
        "Variantes": {
            "Manzana, pera, durazno, ciruela": { cantidad: 300, unidad: 'g' },
            "Zanahoria": { cantidad: 150, unidad: 'g' },
            "Ralladura de limón": { cantidad: 1, unidad: 'unidad' },
            "Coco": { cantidad: 50, unidad: 'g' },
            "Cacao": { cantidad: 25, unidad: 'g' }
        }
    },
    tortaCalabaza: {
        "Huevos": { cantidad: 1, unidad: 'unidad' },
        "Aceite": { cantidad: 100, unidad: 'cc' },
        "Azúcar": { cantidad: 110, unidad: 'g' },
        "Calabaza": { cantidad: 200, unidad: 'g' },
        "Harina": { cantidad: 180, unidad: 'g' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Canela": { cantidad: 5, unidad: 'g' }
    },
    tortaNaranja: {
        "Naranja con cáscara": { cantidad: 150, unidad: 'g' },
        "Harina": { cantidad: 160, unidad: 'g' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Huevo": { cantidad: 3, unidad: 'unidad' },
        "Aceite": { cantidad: 110, unidad: 'cc' },
        "Azúcar": { cantidad: 125, unidad: 'g' }
    },
    panCasero: {
        "Harina": { cantidad: 300, unidad: 'g' },
        "Levadura seca": { cantidad: 5, unidad: 'g' },
        "Azúcar": { cantidad: 5, unidad: 'g' },
        "Aceite": { cantidad: 10, unidad: 'cc' },
        "Agua tibia": { cantidad: 200, unidad: 'cc' },
        "Sal": { cantidad: 2.5, unidad: 'g' },
        "Variantes": {
            "Queso": { cantidad: 50, unidad: 'g' },
            "Hierbas aromáticas": { cantidad: 5, unidad: 'g' },
            "Remolacha": { cantidad: 1, unidad: 'unidad' },
            "Espinaca": { cantidad: 22, unidad: 'g' },
            "Morrón": { cantidad: 45, unidad: 'g' },
            "Salvado de trigo": { cantidad: 100, unidad: 'g' }
        }
    },
    panCalabaza: {
        "Harina": { cantidad: 300, unidad: 'g' },
        "Leche": { cantidad: 150, unidad: 'cc' },
        "Calabaza": { cantidad: 80, unidad: 'g' },
        "Aceite": { cantidad: 50, unidad: 'cc' },
        "Huevo": { cantidad: 1, unidad: 'unidad' },
        "Polvo de hornear": { cantidad: 25, unidad: 'g' },
        "Sal": { cantidad: 2.5, unidad: 'g' }
    },
    sconesQueso: {
        "Harina": { cantidad: 360, unidad: 'g' },
        "Aceite": { cantidad: 60, unidad: 'cc' },
        "Leche": { cantidad: 175, unidad: 'cc' },
        "Polvo de hornear": { cantidad: 15, unidad: 'g' },
        "Sal": { cantidad: 3.5, unidad: 'g' },
        "Queso rallado": { cantidad: 40, unidad: 'g' },
        "Variantes": {
            "Espinaca fresca": { cantidad: 150, unidad: 'g' },
            "Espinaca congelada": { cantidad: 75, unidad: 'g' },
            "Hierbas aromáticas secas": { cantidad: 2.5, unidad: 'g' },
            "Hierbas aromáticas frescas": { cantidad: 10, unidad: 'g' }
        }
    },
    sconesDulces: {
        "Harina": { cantidad: 225, unidad: 'g' },
        "Azúcar": { cantidad: 75, unidad: 'g' },
        "Aceite": { cantidad: 50, unidad: 'cc' },
        "Polvo de hornear": { cantidad: 10, unidad: 'g' },
        "Sal": { cantidad: 1.25, unidad: 'g' },
        "Leche": { cantidad: 110, unidad: 'cc' },
        "Vainilla": { cantidad: 10, unidad: 'cc' }
    },
    hummus: {
        "Garbanzos": { cantidad: 250, unidad: 'g' },
        "Jugo de limón": { cantidad: 2, unidad: 'cucharada' },
        "Aceite de oliva": { cantidad: 4, unidad: 'cucharada' },
        "Sal": { cantidad: 1, unidad: 'cucharadita' },
       
    }
};

// Función para calcular y mostrar ingredientes ajustados
function calcularIngredientes() {
    const recetaSeleccionada = document.getElementById('recetas').value;
    const cantidadComensales = parseFloat(document.getElementById('comensales').value);

    // Validar la entrada
    if (!recetaSeleccionada || isNaN(cantidadComensales) || cantidadComensales <= 0) {
        alert('Por favor, selecciona una receta y especifica una cantidad de comensales válida.');
        return;
    }

    const ingredientes = recetas[recetaSeleccionada];

    // Verifica si la receta existe
    if (!ingredientes) {
        alert(`Receta "${recetaSeleccionada}" no encontrada.`);
        return;
    }

    let html = '<table border="1"><tr><th>Ingrediente</th><th>Cantidad</th><th>Unidad</th></tr>';

    for (const [ingrediente, info] of Object.entries(ingredientes)) {
        if (ingrediente === 'Variantes') {
            html += '<tr><td colspan="3"><strong>Variantes:</strong></td></tr>';
            for (const [variante, varianteInfo] of Object.entries(info)) {
                html += `<tr><td>${variante}</td><td>${(varianteInfo.cantidad * cantidadComensales).toFixed(2)}</td><td>${varianteInfo.unidad}</td></tr>`;
            }
        } else {
            html += `<tr><td>${ingrediente}</td><td>${(info.cantidad * cantidadComensales).toFixed(2)}</td><td>${info.unidad}</td></tr>`;
        }
    }

    html += '</table>';

    document.getElementById('resultado').innerHTML = html;
}

// Asignar evento al botón
document.getElementById('calcular').addEventListener('click', calcularIngredientes);
