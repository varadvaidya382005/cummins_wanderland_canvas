import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Save, PlusCircle, Upload, X } from "lucide-react";

interface Attraction {
  name: string;
  description: string;
}

interface Photo {
  file: File;
  preview: string;
}

const CreateBlog = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState("basic");
  const [photos, setPhotos] = useState<Photo[]>([]);

  // Basic Information
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState("");
  const [bestTimeToVisit, setBestTimeToVisit] = useState("");

  // Attractions
  const [attractions, setAttractions] = useState<Attraction[]>([{ name: "", description: "" }]);
  const [attractionTips, setAttractionTips] = useState("");

  // Food & Dining
  const [foodRecommendations, setFoodRecommendations] = useState("");
  const [mustTryDishes, setMustTryDishes] = useState("");
  const [diningTips, setDiningTips] = useState("");

  // Travel Tips
  const [transportation, setTransportation] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [packingTips, setPackingTips] = useState("");
  const [safetyTips, setSafetyTips] = useState("");

  const handleSaveBlog = () => {
    if (!destination) {
      alert("Please enter a destination for your blog.");
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Blog saved successfully!");
      navigate("/");
    }, 2000);
  };

  const handleAddAttraction = () => {
    setAttractions([...attractions, { name: "", description: "" }]);
  };

  const handleAttractionChange = (index: number, field: keyof Attraction, value: string) => {
    const newAttractions = [...attractions];
    newAttractions[index][field] = value;
    setAttractions(newAttractions);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newPhotos = files.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setPhotos([...photos, ...newPhotos]);
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  const sections = [
    { id: "basic", title: "Basic Information" },
    { id: "attractions", title: "Attractions of Place" },
    { id: "food", title: "Food & Dining" },
    { id: "tips", title: "Travel Tips" },
    { id: "photos", title: "Photos" }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "basic":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Destination Name</label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g., Paris, France"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a brief overview of your experience..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Trip Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select duration</option>
                  <option value="weekend">Weekend Trip (1-3 days)</option>
                  <option value="short">Short Trip (4-7 days)</option>
                  <option value="medium">Medium Trip (1-2 weeks)</option>
                  <option value="long">Long Trip (2+ weeks)</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Approximate Cost (USD)</label>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder="e.g., 1500"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Best Time to Visit</label>
              <textarea
                value={bestTimeToVisit}
                onChange={(e) => setBestTimeToVisit(e.target.value)}
                placeholder="When is the best time to visit this destination?"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
          </div>
        );

      case "attractions":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">Attractions</label>
                <button
                  onClick={handleAddAttraction}
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <PlusCircle className="h-4 w-4" />
                  Add Attraction
                </button>
              </div>
              {attractions.map((attraction, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    value={attraction.name}
                    onChange={(e) => handleAttractionChange(index, 'name', e.target.value)}
                    placeholder="Attraction name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    value={attraction.description}
                    onChange={(e) => handleAttractionChange(index, 'description', e.target.value)}
                    placeholder="Attraction description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Attraction Tips</label>
              <textarea
                value={attractionTips}
                onChange={(e) => setAttractionTips(e.target.value)}
                placeholder="Share any tips or advice for visiting these attractions..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
          </div>
        );

      case "food":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Food Recommendations</label>
              <textarea
                value={foodRecommendations}
                onChange={(e) => setFoodRecommendations(e.target.value)}
                placeholder="Share your favorite restaurants and food experiences..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Must-Try Dishes</label>
              <textarea
                value={mustTryDishes}
                onChange={(e) => setMustTryDishes(e.target.value)}
                placeholder="List the must-try dishes and local specialties..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Dining Tips</label>
              <textarea
                value={diningTips}
                onChange={(e) => setDiningTips(e.target.value)}
                placeholder="Share any dining tips or cultural etiquette..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
          </div>
        );

      case "tips":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Transportation</label>
              <textarea
                value={transportation}
                onChange={(e) => setTransportation(e.target.value)}
                placeholder="Share information about local transportation options..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Accommodation</label>
              <textarea
                value={accommodation}
                onChange={(e) => setAccommodation(e.target.value)}
                placeholder="Share your accommodation recommendations..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Packing Tips</label>
              <textarea
                value={packingTips}
                onChange={(e) => setPackingTips(e.target.value)}
                placeholder="What should visitors pack for this destination?"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Safety Tips</label>
              <textarea
                value={safetyTips}
                onChange={(e) => setSafetyTips(e.target.value)}
                placeholder="Share any safety tips or precautions..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
          </div>
        );

      case "photos":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Upload Photos</label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  multiple
                  accept="image/*"
                  className="hidden"
                />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Click to upload photos or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>

            {photos.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={photo.preview}
                      alt={`Upload preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Create New Travel Blog</h1>
        
        {/* Section Navigation */}
        <div className="mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Section Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {renderSection()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              const currentIndex = sections.findIndex(s => s.id === activeSection);
              if (currentIndex > 0) {
                setActiveSection(sections[currentIndex - 1].id);
              }
            }}
            disabled={activeSection === "basic"}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {activeSection === "photos" ? (
            <button
              onClick={handleSaveBlog}
              disabled={saving}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Publish Blog
                </>
              )}
            </button>
          ) : (
            <button
              onClick={() => {
                const currentIndex = sections.findIndex(s => s.id === activeSection);
                if (currentIndex < sections.length - 1) {
                  setActiveSection(sections[currentIndex + 1].id);
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateBlog; 