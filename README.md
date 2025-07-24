# 🌱 EcoSort - AI Waste Segregation Game (Flask Version)

A gamified web application built with Flask and TensorFlow that uses AI to help users learn proper waste segregation through image classification and interactive feedback.

## 🎯 Features

### Core Functionality
- **AI-Powered Image Classification**: Uses TensorFlow with MobileNetV2 model to classify waste items
- **Three Waste Categories**: Plastic, Paper, and Organic waste classification
- **Interactive UI**: Modern, responsive design with drag-and-drop file upload
- **Real-time Analysis**: Server-side processing with confidence percentages

### Gamification Elements
- **Points System**: Earn points for providing feedback on AI predictions
- **Level Progression**: Level up based on your total score
- **Leaderboard**: Compare your performance with others
- **Educational Tips**: Random tips about proper waste segregation
- **Bonus Points**: Occasional bonus points for engagement

### User Experience
- **Drag & Drop Upload**: Easy image upload with visual feedback
- **Confidence Visualization**: Visual bars showing AI confidence levels
- **Feedback System**: Rate AI predictions to improve accuracy
- **Local Storage**: Persistent user scores and progress
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

### Local Development

1. **Clone the Repository**
   ```bash
   git clone <your-repository-url>
   cd ecosort-flask
   ```

2. **Create Virtual Environment**
   ```bash
   python -m venv venv
   
   # Activate on Windows
   venv\Scripts\activate
   
   # Activate on macOS/Linux
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**
   ```bash
   python app.py
   ```

5. **Open in Browser**
   Navigate to `http://localhost:5000`

## 🛠️ Technical Implementation

### Backend (Flask)
- **Flask Framework**: Python web framework for API endpoints
- **TensorFlow**: Server-side AI model processing
- **MobileNetV2**: Pre-trained image classification model
- **PIL/Pillow**: Image processing and manipulation
- **NumPy**: Numerical computations

### Frontend
- **HTML5**: Semantic markup with modern features
- **CSS3**: Responsive design with animations
- **JavaScript**: Interactive functionality and API communication
- **Canvas API**: Image processing and conversion

### AI Model
```python
# MobileNetV2 pre-trained on ImageNet
model = tf.keras.applications.MobileNetV2(
    weights='imagenet',
    include_top=True,
    input_shape=(224, 224, 3)
)
```

### Waste Classification Logic
```python
waste_keywords = {
    'plastic': ['bottle', 'container', 'plastic', 'bag', 'wrapper', 'packaging'],
    'paper': ['paper', 'cardboard', 'newspaper', 'magazine', 'book', 'box'],
    'organic': ['food', 'fruit', 'vegetable', 'apple', 'banana', 'bread', 'leaf']
}
```

## 📁 Project Structure

```
ecosort-flask/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── Procfile              # Heroku deployment configuration
├── templates/
│   └── index.html        # Main HTML template
├── static/
│   ├── styles.css        # Modern CSS styling
│   └── script.js         # JavaScript functionality
├── uploads/              # Upload directory (auto-created)
├── DEPLOYMENT.md         # Comprehensive deployment guide
└── README.md             # This file
```

## 🌐 Deployment Options

### 1. Heroku (Recommended)
```bash
# Install Heroku CLI
heroku login
heroku create your-ecosort-app
git push heroku main
heroku open
```

### 2. PythonAnywhere
- Upload files to PythonAnywhere
- Install dependencies
- Configure WSGI file
- Set up web app

### 3. Railway
- Connect GitHub repository
- Automatic deployment
- Environment variable configuration

### 4. DigitalOcean App Platform
- Connect repository
- Choose Python runtime
- Automatic deployment

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## 🎨 Design Features

### Visual Design
- **Green Theme**: Environmentally conscious color scheme
- **Gradient Backgrounds**: Modern visual appeal
- **Smooth Animations**: Enhanced user experience
- **Responsive Layout**: Works on all screen sizes

### UI Components
- **Score Cards**: Display current score and level
- **Leaderboard**: Show top performers
- **Upload Area**: Interactive file upload interface
- **Confidence Bars**: Visual representation of AI predictions
- **Category Cards**: Educational information about waste types

## 🔧 Technical Requirements

### Server Requirements
- Python 3.8 or higher
- 2GB RAM minimum (for TensorFlow)
- 1GB disk space
- Internet connection (for model download)

### Browser Support
- Modern browsers with ES6+ support
- Canvas API support
- Local storage capability

### Dependencies
- Flask 2.3.3
- TensorFlow 2.13.0
- Pillow 10.0.0
- NumPy 1.24.3
- Gunicorn 21.2.0

## 🎯 MVP Approach Achieved

✅ **Pre-trained Model Integration**: Uses MobileNetV2 via TensorFlow  
✅ **2-3 Waste Categories**: Plastic, Paper, Organic classification  
✅ **Photo Upload & Prediction**: Complete server-side processing workflow  
✅ **Points System**: Gamified scoring with local storage  
✅ **Simple UI**: Clean, intuitive interface  
✅ **Flask Backend**: Full server-side implementation  

## 🚀 Future Enhancements

### Potential Improvements
- **Custom Model Training**: Train on specific waste datasets
- **More Categories**: Add metal, glass, electronic waste
- **Database Integration**: PostgreSQL for user data and history
- **Authentication**: User accounts and profiles
- **Social Features**: Share achievements on social media
- **Offline Mode**: Cache model for offline use
- **Multi-language Support**: International accessibility
- **Advanced Analytics**: Detailed user progress tracking

### Technical Enhancements
- **Progressive Web App**: Installable web application
- **Camera Integration**: Direct photo capture
- **Batch Processing**: Analyze multiple images
- **API Integration**: Connect to waste management databases
- **Microservices**: Separate AI service from web app
- **Docker Support**: Containerized deployment

## 🌍 Environmental Impact

This application promotes:
- **Waste Education**: Learn proper segregation practices
- **Behavioral Change**: Gamification encourages participation
- **Environmental Awareness**: Visual feedback on waste types
- **Community Engagement**: Leaderboard fosters competition

## 📱 Usage Instructions

1. **Start the App**: Run `python app.py` or deploy to web server
2. **Wait for Model**: AI model loads automatically (first time may take 10-15 seconds)
3. **Upload Image**: Click upload area or drag image file
4. **Analyze**: Click "Analyze Waste" button
5. **Review**: Check confidence percentages for each category
6. **Feedback**: Rate the prediction accuracy
7. **Progress**: Watch your score and level increase

## 🎮 Gamification Elements

- **Points**: Earn points for every interaction
- **Levels**: Progress through levels based on score
- **Leaderboard**: Compare with other users
- **Tips**: Educational content about waste segregation
- **Visual Feedback**: Immediate response to user actions

## 🔒 Privacy & Data

- **Server-side Processing**: AI model runs on server
- **Local Storage**: User data stored in browser
- **No Tracking**: No analytics or user tracking
- **Open Source**: Transparent code implementation
- **Secure Uploads**: File validation and size limits

## 🐛 Troubleshooting

### Common Issues

1. **Model Loading Slow**
   - First run downloads model (~14MB)
   - Ensure stable internet connection
   - Check available disk space

2. **Memory Issues**
   - Reduce image size before upload
   - Close other applications
   - Consider using smaller model variant

3. **Upload Errors**
   - Check file format (JPG, PNG, WebP)
   - Ensure file size < 16MB
   - Try different browser

4. **Deployment Issues**
   - Check platform-specific requirements
   - Verify all dependencies installed
   - Review deployment logs

## 📊 Performance

### Optimization Tips
- **Image Compression**: Reduce quality to 0.8 for faster uploads
- **Model Caching**: Model loads once and stays in memory
- **Response Caching**: Static files cached by browser
- **CDN**: Use CDN for static assets in production

### Benchmarks
- **Model Load Time**: ~10-15 seconds (first run)
- **Image Processing**: ~2-5 seconds per image
- **Response Time**: < 1 second for API calls
- **Memory Usage**: ~500MB with model loaded

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for a greener future! 🌱**

*Deploy your own instance and help make the world a cleaner place!* 