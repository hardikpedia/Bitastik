
const confessionSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      max: 500,
    },
    upvotes: {
      type: Array,
      default: [],
    },
    downvotes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default models.Confession || model('Confession', confessionSchema);
