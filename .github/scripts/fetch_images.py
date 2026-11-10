"""One-off: pull real Restech event photos from restechexpo.com into /public/images/real as compressed WebP."""
import io, os, urllib.request
from PIL import Image

BASE = "https://www.restechexpo.com/web/image/"
PHOTOS = {
    "hall-overview": "3890-42b6daeb/456606103_399842433128922_2307179067963770907_n.webp",
    "stage-crowd": "1646-746869ad/459569413_414674384979060_764280337256986395_n.webp",
    "vip-walk": "1645-f9b7129a/459560659_414731111640054_8504896734980850672_n.webp",
    "main-stage-audience": "1647-84873989/456459150_399842879795544_5008634471695742838_n.webp",
    "networking": "1644-52d34759/459537231_414674494979049_2631608603068850284_n.webp",
    "seminar-area": "1648-e300f19e/456456453_399842406462258_7370820872260898811_n.webp",
    "booth-crowd": "1346-a89d54e9/459652712_414674388312393_8121608787532540695_n.jpg",
    "robot-demo": "1639-554d2fa8/459586625_414795554966943_3792663441972337833_n.jpg",
    "photo-wall": "1640-33e9d4d0/459504862_414674371645728_4772433459561095548_n.jpg",
    "future-zone": "1650-c48abbc7/407783658_239418472504653_3291420595910668559_n.webp",
    "talk-stage-speakers": "1638-6d9e3430/459440839_414190808360751_1458368879474012368_n.jpg",
    "exhibitor-demo": "1652-51fe7a67/459472140_414850754961423_7740281605530204263_n.webp",
}
out = "public/images/real"
os.makedirs(out, exist_ok=True)
for name, path in PHOTOS.items():
    req = urllib.request.Request(BASE + path, headers={"User-Agent": "Mozilla/5.0"})
    img = Image.open(io.BytesIO(urllib.request.urlopen(req, timeout=60).read())).convert("RGB")
    img.thumbnail((1600, 1600))
    img.save(f"{out}/{name}.webp", "WEBP", quality=72, method=6)
    print(name, img.size, os.path.getsize(f"{out}/{name}.webp"))
