// Game state
let userScore = 0;
let userLevel = 1;
let model = null;
let currentPrediction = null;

// DOM elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');
const previewImage = document.getElementById('previewImage');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultSection = document.getElementById('resultSection');
const loadingOverlay = document.getElementById('loadingOverlay');
const userScoreElement = document.getElementById('userScore');
const userLevelElement = document.getElementById('userLevel');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadUserData();
});

async function initializeApp() {
    try {
        // Load pre-trained MobileNet model
        console.log('Loading AI model...');
        model = await mobilenet.load();
        console.log('Model loaded successfully!');
    } catch (error) {
        console.error('Error loading model:', error);
        alert('Failed to load AI model. Please refresh the page.');
    }
}

function setupEventListeners() {
    // File upload handling
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('drop', handleDrop);
    fileInput.addEventListener('change', handleFileSelect);

    // Analyze button
    analyzeBtn.addEventListener('click', analyzeImage);

    // Feedback buttons
    document.getElementById('correctBtn').addEventListener('click', () => handleFeedback(true));
    document.getElementById('wrongBtn').addEventListener('click', () => handleFeedback(false));
}

function handleDragOver(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#45a049';
    uploadArea.style.background = '#e8f5e8';
}

function handleDrop(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#4CAF50';
    uploadArea.style.background = '#f8f9fa';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        previewImage.src = e.target.result;
        previewContainer.style.display = 'block';
        resultSection.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

async function analyzeImage() {
    if (!model) {
        alert('AI model is still loading. Please wait a moment.');
        return;
    }

    if (!previewImage.src) {
        alert('Please upload an image first.');
        return;
    }

    showLoading(true);

    try {
        // Classify the image using MobileNet
        const predictions = await model.classify(previewImage);
        
        // Map MobileNet predictions to waste categories
        currentPrediction = mapToWasteCategories(predictions);
        
        // Display results
        displayResults(currentPrediction);
        showLoading(false);
        
    } catch (error) {
        console.error('Error analyzing image:', error);
        alert('Error analyzing image. Please try again.');
        showLoading(false);
    }
}

function mapToWasteCategories(predictions) {
    // Keywords for each waste category
    const plasticKeywords = ['bottle', 'container', 'plastic', 'bag', 'wrapper', 'packaging', 'cup', 'straw'];
    const paperKeywords = ['paper', 'cardboard', 'newspaper', 'magazine', 'book', 'box', 'envelope', 'folder'];
    const organicKeywords = ['food', 'fruit', 'vegetable', 'apple', 'banana', 'bread', 'leaf', 'plant', 'flower'];

    let plasticScore = 0;
    let paperScore = 0;
    let organicScore = 0;

    // Calculate scores based on prediction keywords
    predictions.forEach(prediction => {
        const className = prediction.className.toLowerCase();
        const probability = prediction.probability;

        // Check for plastic keywords
        if (plasticKeywords.some(keyword => className.includes(keyword))) {
            plasticScore += probability;
        }
        
        // Check for paper keywords
        if (paperKeywords.some(keyword => className.includes(keyword))) {
            paperScore += probability;
        }
        
        // Check for organic keywords
        if (organicKeywords.some(keyword => className.includes(keyword))) {
            organicScore += probability;
        }
    });

    // Normalize scores to percentages
    const total = plasticScore + paperScore + organicScore;
    if (total === 0) {
        // Default distribution if no matches
        plasticScore = 0.33;
        paperScore = 0.33;
        organicScore = 0.34;
    } else {
        plasticScore = (plasticScore / total) * 100;
        paperScore = (paperScore / total) * 100;
        organicScore = (organicScore / total) * 100;
    }

    return {
        plastic: Math.round(plasticScore),
        paper: Math.round(paperScore),
        organic: Math.round(organicScore),
        predictions: predictions
    };
}

function displayResults(prediction) {
    // Update confidence bars
    document.getElementById('plasticConfidence').style.width = prediction.plastic + '%';
    document.getElementById('paperConfidence').style.width = prediction.paper + '%';
    document.getElementById('organicConfidence').style.width = prediction.organic + '%';

    // Update confidence text
    document.getElementById('plasticText').textContent = prediction.plastic + '%';
    document.getElementById('paperText').textContent = prediction.paper + '%';
    document.getElementById('organicText').textContent = prediction.organic + '%';

    // Show result section
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

function handleFeedback(isCorrect) {
    if (!currentPrediction) return;

    const points = isCorrect ? 10 : 5; // Points for correct/wrong feedback
    userScore += points;
    
    // Update level based on score
    userLevel = Math.floor(userScore / 50) + 1;
    
    // Update display
    updateScoreDisplay();
    saveUserData();
    
    // Show feedback message
    const resultMessage = document.getElementById('resultMessage');
    if (isCorrect) {
        resultMessage.textContent = `Great job! You earned ${points} points for providing feedback!`;
        resultMessage.className = 'result-message correct';
    } else {
        resultMessage.textContent = `Thanks for the feedback! You earned ${points} points for helping improve the AI!`;
        resultMessage.className = 'result-message correct';
    }
    
    // Reset for next round
    setTimeout(() => {
        resetForNextRound();
    }, 2000);
}

function updateScoreDisplay() {
    userScoreElement.textContent = userScore;
    userLevelElement.textContent = `Level ${userLevel}`;
}

function resetForNextRound() {
    // Clear current image and results
    previewContainer.style.display = 'none';
    resultSection.style.display = 'none';
    previewImage.src = '';
    fileInput.value = '';
    currentPrediction = null;
    
    // Reset confidence bars
    document.getElementById('plasticConfidence').style.width = '0%';
    document.getElementById('paperConfidence').style.width = '0%';
    document.getElementById('organicConfidence').style.width = '0%';
    document.getElementById('plasticText').textContent = '0%';
    document.getElementById('paperText').textContent = '0%';
    document.getElementById('organicText').textContent = '0%';
    
    // Clear result message
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('resultMessage').className = 'result-message';
}

function showLoading(show) {
    loadingOverlay.style.display = show ? 'flex' : 'none';
}

// Local storage functions
function saveUserData() {
    const userData = {
        score: userScore,
        level: userLevel,
        timestamp: Date.now()
    };
    localStorage.setItem('ecosort_user_data', JSON.stringify(userData));
}

function loadUserData() {
    const savedData = localStorage.getItem('ecosort_user_data');
    if (savedData) {
        try {
            const userData = JSON.parse(savedData);
            userScore = userData.score || 0;
            userLevel = userData.level || 1;
            updateScoreDisplay();
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }
}

// Add some gamification features
function addBonusPoints() {
    // Bonus points for consecutive correct classifications
    const bonus = Math.floor(Math.random() * 5) + 1;
    userScore += bonus;
    updateScoreDisplay();
    saveUserData();
    
    // Show bonus notification
    const notification = document.createElement('div');
    notification.className = 'bonus-notification';
    notification.textContent = `+${bonus} Bonus Points!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS for bonus notification
const style = document.createElement('style');
style.textContent = `
    .bonus-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: bold;
        animation: slideIn 0.5s ease-out;
        z-index: 1001;
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Add some educational tips
const tips = [
    "💡 Tip: Plastic bottles should be rinsed before recycling",
    "💡 Tip: Paper with food stains goes in organic waste",
    "💡 Tip: Small plastic pieces can be recycled together",
    "💡 Tip: Cardboard boxes should be flattened for recycling",
    "💡 Tip: Organic waste can be composted at home"
];

function showRandomTip() {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    const tipElement = document.createElement('div');
    tipElement.className = 'tip-notification';
    tipElement.textContent = tip;
    document.body.appendChild(tipElement);
    
    setTimeout(() => {
        tipElement.remove();
    }, 5000);
}

// Show tip every 5 classifications
let classificationCount = 0;
const originalHandleFeedback = handleFeedback;
handleFeedback = function(isCorrect) {
    originalHandleFeedback.call(this, isCorrect);
    classificationCount++;
    if (classificationCount % 5 === 0) {
        setTimeout(showRandomTip, 1000);
    }
};

// Add CSS for tip notification
const tipStyle = document.createElement('style');
tipStyle.textContent = `
    .tip-notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: bold;
        animation: slideUp 0.5s ease-out;
        z-index: 1001;
        box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
        max-width: 400px;
        text-align: center;
    }
    
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(tipStyle); 