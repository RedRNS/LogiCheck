import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  // For future authentication
  passwordHash: {
    type: String
  },
  // Track user progress in the Dojo
  dojoStats: {
    totalChallenges: {
      type: Number,
      default: 0
    },
    correctAnswers: {
      type: Number,
      default: 0
    },
    fallacyMastery: {
      type: Map,
      of: Number,
      default: new Map()
    }
  },
  // Track usage history
  analysisHistory: [{
    type: {
      type: String,
      enum: ['text', 'essay'],
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    textLength: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
});

// Update lastActive timestamp on any query
userSchema.pre('save', function(next) {
  this.lastActive = new Date();
  next();
});

export default mongoose.model('User', userSchema);
