// TypeKids - 真实动物照片映射
// 使用 Unsplash 精选高质量动物照片（固定ID，永久稳定）

const ANIMAL_PHOTOS = {
  panda:     'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=600&fit=crop',
  fox:       'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&h=600&fit=crop',
  rabbit:    'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=600&fit=crop',
  bear:      'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=600&h=600&fit=crop',
  dolphin:   'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=600&h=600&fit=crop',
  lion:      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&h=600&fit=crop',
  penguin:   'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=600&h=600&fit=crop',
  koala:     'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=600&h=600&fit=crop',
  turtle:    'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&h=600&fit=crop',
  butterfly: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=600&fit=crop',
  elephant:  'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&h=600&fit=crop',
  frog:      'https://images.unsplash.com/photo-1497925693726-0c4ffeae2fdb?w=600&h=600&fit=crop',
  unicorn:   'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=600&fit=crop', // 白马代替
  dragon:    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop', // 蜥蜴代替
  whale:     'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&h=600&fit=crop',
  phoenix:   'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&h=600&fit=crop', // 火烈鸟代替
  owl:       'https://images.unsplash.com/photo-1543549049-9fbda6a4ee7b?w=600&h=600&fit=crop',
  cat:       'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop',
  dog:       'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=600&fit=crop',
  monkey:    'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&h=600&fit=crop',
  hamster:   'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=600&fit=crop',
  parrot:    'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600&h=600&fit=crop',
  horse:     'https://images.unsplash.com/photo-1534773728080-33d31da27ae5?w=600&h=600&fit=crop',
  tiger:     'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&h=600&fit=crop',
};

/**
 * 根据动物 id 返回真实照片的 img 标签 HTML
 * 带 loading="lazy" + fallback emoji
 */
function getAnimalPhotoHTML(animalId, size = 300) {
  const url = ANIMAL_PHOTOS[animalId];
  if (!url) return '';
  return `<img
    src="${url}"
    alt="${animalId}"
    class="animal-real-photo"
    loading="lazy"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
  /><div class="animal-photo-fallback" style="display:none">📷</div>`;
}
