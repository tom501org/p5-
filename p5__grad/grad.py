import numpy as np
from PIL import Image

line_data = np.arange(256)
mat = np.tile(line_data, (256,1))

im = Image.fromarray(np.uint8(mat), 'L')
im.save('out.png')