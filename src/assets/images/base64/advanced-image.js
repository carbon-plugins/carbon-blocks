const AdvancedImage = "data:image/jpeg;base64,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"

export default AdvancedImage;
