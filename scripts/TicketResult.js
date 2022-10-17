import { btnResult , printResult , inputAmount , selectCategory , btnReset} from "./varElements.js";

/* Resumen */
btnResult.addEventListener('click' , (e) => {
    let costo = 200;
    if (inputAmount.value > 0) {
        if(selectCategory.value === "Estudiante") printResult.textContent = (costo - costo * 0.8) * inputAmount.value;
        if(selectCategory.value === "Trainee") printResult.textContent = (costo - costo * 0.5) * inputAmount.value;
        if(selectCategory.value === "Junior") printResult.textContent = (costo - costo * 0.15) * inputAmount.value;
        e.preventDefault();
    }
});

/* Add reset on Resumen when click on reset button  */
btnReset.addEventListener('click' , () => {
    printResult.textContent = '';
});