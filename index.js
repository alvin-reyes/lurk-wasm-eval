import * as wasm from "lurk-rs";

export function runLurkEvaluator(lurkExpression) {
    const out = wasm.run_lurk(lurkExpression);
    return out;
}

export function saveLurkExpressionInput(key, lurkExpression){
    console.log("saving: " + key + " " + lurkExpression);
}

export function saveLurkExpressionInputOutput(key, lurkExpressionInput, lurkExpressionOutput){
    console.log("saving: " + key + " " + lurkExpressionInput + " " + lurkExpressionOutput);
}

export function retrieveLurkExpressionByKey(key) {
    console.log("retrieveLurkExpressionByKey: " + key);
}

export function retrieveLurkExpressionInputByKey(key) {
    console.log("retrieveLurkExpressionInputByKey: " + key);
}

export function retrieveLurkExpressionOutputByKey(key) {
    console.log("retrieveLurkExpressionOutputByKey: " + key);
}