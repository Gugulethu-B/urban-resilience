import numpy as np
from PIL import Image
import os
import random

# Load your trained model once
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'ecosort_model.h5')
CLASS_NAMES = ['Plastic', 'Glass', 'Metal', 'Paper', 'Organic']  # Update as needed

# model = tf.keras.models.load_model(MODEL_PATH)

def preprocess_image(image_path, target_size=(224, 224)):
    img = Image.open(image_path).convert('RGB')
    img = img.resize(target_size)
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

def classify(image_path):
    """
    Mock EcoSort classifier.
    Returns random waste type, accuracy, and points for demonstration.
    """
    waste_types = [
        ("Plastic", 94, 10),
        ("Glass", 97, 8),
        ("Metal", 91, 7),
        ("Paper", 89, 5),
        ("Organic", 85, 3)
    ]
    waste_type, accuracy, points = random.choice(waste_types)
    return {
        "type": waste_type,
        "accuracy": accuracy,
        "points": points
    }
    
    # try:
    #     img_array = preprocess_image(image_path)
    #     preds = model.predict(img_array)[0]
    #     class_idx = int(np.argmax(preds))
    #     waste_type = CLASS_NAMES[class_idx]
    #     accuracy = round(float(preds[class_idx]) * 100, 2)
    #     # Assign points based on class (customize as needed)
    #     points_map = {'Plastic': 10, 'Glass': 8, 'Metal': 7, 'Paper': 5, 'Organic': 3}
    #     points = points_map.get(waste_type, 1)
    #     return {
    #         "type": waste_type,
    #         "accuracy": accuracy,
    #         "points": points
    #     }
    # except Exception as e:
    #     return {
    #         "type": "Unknown",
    #         "accuracy": 0,
    #         "points": 0,
    #         "error": str(e)
    #     }
