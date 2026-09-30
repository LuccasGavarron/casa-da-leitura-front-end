from pathlib import Path
import shutil
root=Path(__file__).parent
out=root/'dist'
if out.exists(): shutil.rmtree(out)
out.mkdir()
for name in ('html','css','js','imagens'): shutil.copytree(root/name,out/name)
print('Arquivos gerados em dist/')
