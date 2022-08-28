import * as wasm from "lurk-rs";

export function runLurkEvaluator(lurkExpression) {
    const out = wasm.run_lurk(lurkExpression);
    return out;
}