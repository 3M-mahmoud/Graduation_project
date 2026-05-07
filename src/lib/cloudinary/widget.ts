export const openCloudinaryWidget = (onSuccess: (url: string) => void) => {
  if (typeof window === "undefined") return;

  const cloudinary = (window as any).cloudinary;

  if (!cloudinary?.createUploadWidget) {
    console.error("Cloudinary script not loaded");
    return;
  }

  const widget = cloudinary.createUploadWidget(
    {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      sources: ["local", "url", "camera"],
      multiple: false,
    },
    (error: any, result: any) => {
      if (!error && result.event === "success") {
        onSuccess(result.info.secure_url);
      }
    },
  );

  widget.open();
};
