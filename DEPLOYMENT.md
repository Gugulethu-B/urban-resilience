# 🚀 Deployment Guide - EcoSort Flask App

This guide will help you deploy the EcoSort waste segregation app to various platforms.

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- Git (for version control)

## 🛠️ Local Development Setup

### 1. Clone/Download the Project
```bash
# If using git
git clone <your-repository-url>
cd ecosort-flask

# Or simply download and extract the files
```

### 2. Create Virtual Environment
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Application
```bash
python app.py
```

The app will be available at `http://localhost:5000`

## 🌐 Deployment Options

### Option 1: Heroku Deployment

#### 1. Create Heroku Account
- Sign up at [heroku.com](https://heroku.com)
- Install Heroku CLI

#### 2. Prepare for Heroku
Create a `Procfile` in the root directory:
```
web: gunicorn app:app
```

#### 3. Deploy to Heroku
```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create your-ecosort-app

# Add buildpacks for TensorFlow
heroku buildpacks:add heroku/python
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-google-chrome

# Deploy
git add .
git commit -m "Initial deployment"
git push heroku main

# Open the app
heroku open
```

### Option 2: PythonAnywhere Deployment

#### 1. Create PythonAnywhere Account
- Sign up at [pythonanywhere.com](https://pythonanywhere.com)

#### 2. Upload Files
- Upload all project files to your PythonAnywhere account
- Use the Files tab to upload or use Git

#### 3. Install Dependencies
```bash
pip install --user -r requirements.txt
```

#### 4. Configure WSGI File
Edit the WSGI file in your PythonAnywhere account:
```python
import sys
path = '/home/yourusername/ecosort-flask'
if path not in sys.path:
    sys.path.append(path)

from app import app as application
```

#### 5. Configure Web App
- Go to Web tab
- Add new web app
- Choose Flask
- Set source code directory to your project folder
- Set working directory to your project folder

### Option 3: Railway Deployment

#### 1. Create Railway Account
- Sign up at [railway.app](https://railway.app)

#### 2. Connect Repository
- Connect your GitHub repository
- Railway will automatically detect Python app

#### 3. Configure Environment
- Add environment variables if needed
- Railway will automatically install dependencies

#### 4. Deploy
- Railway will automatically deploy when you push to main branch

### Option 4: DigitalOcean App Platform

#### 1. Create DigitalOcean Account
- Sign up at [digitalocean.com](https://digitalocean.com)

#### 2. Create App
- Go to App Platform
- Connect your GitHub repository
- Choose Python as runtime

#### 3. Configure Build
- Set build command: `pip install -r requirements.txt`
- Set run command: `gunicorn app:app`

#### 4. Deploy
- DigitalOcean will automatically deploy your app

## 🔧 Configuration

### Environment Variables
Create a `.env` file for local development:
```
FLASK_ENV=development
SECRET_KEY=your_secret_key_here
```

### Production Settings
For production, modify `app.py`:
```python
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
```

## 📁 Project Structure
```
ecosort-flask/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML template
├── static/
│   ├── styles.css        # CSS styles
│   └── script.js         # JavaScript functionality
├── uploads/              # Upload directory (auto-created)
└── DEPLOYMENT.md         # This file
```

## 🐛 Troubleshooting

### Common Issues

#### 1. TensorFlow Installation Issues
```bash
# Try installing TensorFlow CPU version
pip install tensorflow-cpu==2.13.0
```

#### 2. Memory Issues
- Reduce image size in preprocessing
- Use smaller model variant
- Add memory limits in deployment platform

#### 3. Model Loading Issues
- Ensure sufficient disk space
- Check internet connection for model download
- Consider pre-downloading model

#### 4. File Upload Issues
- Check file size limits
- Ensure upload directory exists
- Verify file permissions

### Performance Optimization

#### 1. Model Optimization
```python
# Use TensorFlow Lite for smaller model
import tensorflow as tf
model = tf.lite.Interpreter(model_path="model.tflite")
```

#### 2. Image Processing
```python
# Reduce image quality for faster processing
image_data = canvas.toDataURL('image/jpeg', 0.6)
```

#### 3. Caching
```python
# Add caching headers
@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'public, max-age=300'
    return response
```

## 🔒 Security Considerations

### 1. File Upload Security
- Validate file types
- Limit file sizes
- Scan for malware (in production)

### 2. API Security
- Add rate limiting
- Implement authentication
- Use HTTPS in production

### 3. Environment Variables
- Never commit secrets to version control
- Use environment variables for sensitive data

## 📊 Monitoring

### 1. Logging
```python
import logging
logging.basicConfig(level=logging.INFO)
```

### 2. Health Checks
```python
@app.route('/health')
def health_check():
    return jsonify({'status': 'healthy'})
```

### 3. Error Tracking
- Consider using Sentry for error tracking
- Monitor application performance

## 🚀 Scaling Considerations

### 1. Load Balancing
- Use multiple instances
- Implement session management
- Consider Redis for session storage

### 2. Database Integration
- Add PostgreSQL for user data
- Implement proper user authentication
- Store classification history

### 3. CDN
- Use CDN for static files
- Optimize image delivery
- Implement caching strategies

## 📞 Support

For deployment issues:
1. Check platform-specific documentation
2. Review error logs
3. Test locally first
4. Consider platform limitations

---

**Happy Deploying! 🌱** 