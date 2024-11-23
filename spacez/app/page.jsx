export default function Home() {
    const SketchfabEmbed = () => {
        return (
        <div className="sketchfab-embed-wrapper">
            <iframe
              title="МЕЖДУНАРОДНАЯ КОСМИЧЕСКАЯ СТАНЦИЯ (МКС)"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/1617d44d5d7c4430aecfa48b2e85e529/embed?autostart=1&preload=1&transparent=1&ui_watermark_link=0&ui_watermark=0"
            >
            </iframe>
          </div>
        );
      };

    useEffect(() => {
        main();
}, [])

  return (
    <>
      <SketchfabEmbed />
    </>
    );
}