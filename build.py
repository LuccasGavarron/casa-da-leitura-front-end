from pathlib import Path
import shutil
import subprocess

root = Path(__file__).parent
out = root / 'dist'
if out.exists():
    shutil.rmtree(out)
out.mkdir()
for name in ('html', 'css', 'js', 'imagens'):
    shutil.copytree(root / name, out / name)
terser = root / 'node_modules' / '.bin' / 'terser'
if not terser.exists():
    raise SystemExit('Instale a dependência de build com npm install antes de executar npm run build.')
for source in (root / 'js').rglob('*.js'):
    if 'vendor' in source.parts:
        continue
    destination = out / source.relative_to(root)
    subprocess.run([str(terser), str(source), '--module', '--compress', '--mangle', '--output', str(destination)], check=True)
print('Arquivos otimizados em dist/')
