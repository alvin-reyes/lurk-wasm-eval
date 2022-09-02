
# Cleanup
rm -Rf dist
rm -Rf lurk-rs

git clone https://github.com/lurk-lang/lurk-rs.git
cd lurk-rs
git checkout acs/wasm-support && git pull origin acs/wasm-support

# build
CC=clang AR=llvm-ar wasm-pack build --no-default-features --features wasm

cd ../
pwd
#
## copy to lurk-rs-pkg
cp -r ./lurk-rs/pkg/* ./lurk-rs-pkg/

# build project
npm install --save-dev webpack
npm run build

cp -r lurk-rs-pkg dist/development/
cp -r pkg dist/development/

# Cleanup
rm -Rf lurk-rs
