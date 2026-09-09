import os
import json

folder = './images/thumbnails'
output_file = 'images.json'

extensions = ('.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp')
image_files = []

for filename in os.listdir(folder):
    if filename.lower().endswith(extensions):
        # Use forward slashes for web
        image_files.append(os.path.join(folder, filename).replace('\\', '/'))

with open(output_file, 'w') as f:
    json.dump(image_files, f, indent=2)

print(f"✅ Generated {output_file} with {len(image_files)} images.")