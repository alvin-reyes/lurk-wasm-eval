import * as wasm from "lurk-rs";

export function runLurkEvaluator(lurkExpression) {
    const out = wasm.run_lurk(lurkExpression);
    return out;
}

export function saveLurkExpressionInput(key, input){
    localStorage.setItem(key+"_input", lurkExpression);
}

export function saveLurkExpressionOutput(key, output){
    localStorage.setItem(key+"_output", lurkExpression);
}

export function saveLurkExpressionInputOutput(key, lurkExpressionInput, lurkExpressionOutput){
    localStorage.setItem(key+"_input", lurkExpressionInput);
    localStorage.setItem(key+"_output", lurkExpressionOutput);
}

export function retrieveLurkExpressionByKey(key) {
    return  localStorage.getItem(key+"_input");
}

export function retrieveLurkExpressionInputByKey(key) {
    return  localStorage.getItem(key+"_input");
}

export function retrieveLurkExpressionOutputByKey(key) {
    return localStorage.getItem(key+"_output");
}