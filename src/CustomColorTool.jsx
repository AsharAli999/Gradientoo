
import React, { useState } from 'react';
import './index.css';

const CustomColorTool = () => {
  const [activeTab, setActiveTab] = useState('text');

  // New state variables for background gradients
  const [bgColorStop1, setBgColorStop1] = useState('#ffffff'); // Default color for background color stop 1
  const [bgColorStop2, setBgColorStop2] = useState('#70a6e1'); // Default color for background color stop 2
  const [bgColorStop3, setBgColorStop3] = useState('#000000'); // Default color for background color stop 3
  const [bgGradientDirection, setBgGradientDirection] = useState('to right'); // Default background gradient direction

  // New state variables for button gradients
  const [buttonColorStop1, setButtonColorStop1] = useState('#ff0000'); // Default color for button color stop 1
  const [buttonColorStop2, setButtonColorStop2] = useState('#00ff00'); // Default color for button color stop 2
  const [buttonColorStop3, setButtonColorStop3] = useState('#0000ff'); // Default color for button color stop 3
  const [buttonGradientDirection, setButtonGradientDirection] = useState('to right'); // Default button gradient direction

  const [colorStop1, setColorStop1] = useState('#cdcdd5'); // Default color for color stop 1
  const [colorStop2, setColorStop2] = useState('#70a6e1'); // Default color for color stop 2
  const [colorStop3, setColorStop3] = useState('#75e8ff'); // Default color for color stop 3
  const [gradientType, setGradientType] = useState('linear'); // Default gradient type
  const [gradientDirection, setGradientDirection] = useState('to right'); // Default gradient direction


  //New function for generating backgound classes preview

  const generateBackgroundClassesPreview = () => {
    const fromColor = 'from-custom-gradient';
    const viaColor = 'via-custom-gradient-alt';
    const toColor = 'to-custom-gradient-alt-2';
    const textTransparent = 'text-transparent';

    if (gradientType === 'linear') {
      const direction = gradientDirection === 'to right' ? 'r' : gradientDirection === 'to left' ? 'l' : gradientDirection[3];
      return `bg-gradient-to-${direction} ${fromColor} ${viaColor} ${toColor}`;
    } else if (gradientType === 'radial') {
      const ellipsePosition = gradientDirection === 'at center center' ? 'ellipse' : gradientDirection.replace(/at (.+?) (.+?)$/, "ellipse_at_$2_$1");
      return `bg-[radial-gradient(${ellipsePosition},_var(--tw-gradient-stops))] ${fromColor} ${viaColor} ${toColor}`;
    } else if (gradientType === 'conic') {
      const direction = gradientDirection === 'at center' ? '' : gradientDirection.replace(/at (.+?) (.+?)$/, "at_$2_$1");
      return `bg-[conic-gradient(${direction},_var(--tw-gradient-stops))] ${fromColor} ${viaColor} ${toColor}`;
    }
  };


  const generateButtonClassesPreview = () => {
    const fromColor = 'from-custom-gradient';
    const viaColor = 'via-custom-gradient-alt';
    const toColor = 'to-custom-gradient-alt-2';
    const textTransparent = 'text-transparent';

    if (gradientType === 'linear') {
      const direction = gradientDirection === 'to right' ? 'r' : gradientDirection === 'to left' ? 'l' : gradientDirection[3];
      return `bg-gradient-to-${direction} ${fromColor} ${viaColor} ${toColor}`;
    } else if (gradientType === 'radial') {
      const ellipsePosition = gradientDirection === 'at center center' ? 'ellipse' : gradientDirection.replace(/at (.+?) (.+?)$/, "ellipse_at_$2_$1");
      return `bg-[radial-gradient(${ellipsePosition},_var(--tw-gradient-stops))] ${fromColor} ${viaColor} ${toColor}`;
    } else if (gradientType === 'conic') {
      const direction = gradientDirection === 'at center' ? '' : gradientDirection.replace(/at (.+?) (.+?)$/, "at_$2_$1");
      return `bg-[conic-gradient(${direction},_var(--tw-gradient-stops))] ${fromColor} ${viaColor} ${toColor}`;
    }
  };


  // Event handlers for background and button gradients
  const handleBgDirectionChange = (e) => {
    setBgGradientDirection(e.target.value);
  };

  const handleButtonDirectionChange = (e) => {
    setButtonGradientDirection(e.target.value);
  };


  const generateGradient = () => {
    if (gradientType === 'linear') {
      return `linear-gradient(${gradientDirection}, ${colorStop1}, ${colorStop2}, ${colorStop3})`;
    } else if (gradientType === 'radial') {
      return `radial-gradient(${colorStop1}, ${colorStop2}, ${colorStop3})`;
    } else if (gradientType === 'conic') {
      return `conic-gradient(${gradientDirection}, ${colorStop1}, ${colorStop2}, ${colorStop3})`;
    }
  };

  const generateConfigCode = () => {
    return `module.exports = {
  theme: {
    extend: {
      gradientColorStops: {
        'custom-gradient': '${colorStop1}',
        'custom-gradient-alt': '${colorStop2}',
        'custom-gradient-alt-2': '${colorStop3}',
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    backgroundOpacity: false,
  },
};`;
  };

  const generateClassesPreview = () => {
    const fromColor = 'from-custom-gradient';
    const viaColor = 'via-custom-gradient-alt';
    const toColor = 'to-custom-gradient-alt-2';
    const textTransparent = 'text-transparent';

    if (gradientType === 'linear') {
      const direction = gradientDirection === 'to right' ? 'r' : gradientDirection === 'to left' ? 'l' : gradientDirection[3];
      return `bg-gradient-to-${direction} ${fromColor} ${viaColor} ${toColor} bg-clip-text ${textTransparent}`;
    } else if (gradientType === 'radial') {
      const ellipsePosition = gradientDirection === 'at center center' ? 'ellipse' : gradientDirection.replace(/at (.+?) (.+?)$/, "ellipse_at_$2_$1");
      return `bg-[radial-gradient(${ellipsePosition},_var(--tw-gradient-stops))] ${fromColor} ${viaColor} ${toColor} bg-clip-text ${textTransparent}`;
    } else if (gradientType === 'conic') {
      const direction = gradientDirection === 'at center' ? '' : gradientDirection.replace(/at (.+?) (.+?)$/, "at_$2_$1");
      return `bg-[conic-gradient(${direction},_var(--tw-gradient-stops))] ${fromColor} ${viaColor} ${toColor} bg-clip-text ${textTransparent}`;
    }
  };


  const generateTextGradient = () => {
    const gradient = generateGradient();

    if (gradientType === 'linear') {
      const direction = gradientDirection === 'to right' ? 'r' : gradientDirection === 'to left' ? 'l' : gradientDirection[3];
      return `bg-gradient-to-${direction} ${gradient}`;
    } else if (gradientType === 'radial') {
      return `bg-[${gradient}]`;
    } else if (gradientType === 'conic') {
      const degrees = gradientDirection.match(/(\d+)/);
      const angle = degrees ? degrees[0] : '0';
      return `bg-conic-${angle} ${gradient}`;
    }
  };



  const handleTypeChange = (e) => {
    setGradientType(e.target.value);
  };

  const handleDirectionChange = (e) => {
    setGradientDirection(e.target.value);
  };

  return (
    <div className="container mx-auto p-8 sm:p-8  bg-gray-800 text-white">
      <div className="grid gap-8">


        {/* Tab navigation */}
        <ul className="flex flex-wrap border-b border-gray-700">
          <li
            className={`w-full md:w-auto mr-1 py-2 px-4 font-semibold cursor-pointer ${activeTab === 'text' ? 'border-b-2 border-blue-500' : ''
              }`}
            onClick={() => setActiveTab('text')}
          >
            Text
          </li>
          <li
            className={`w-full md:w-auto mr-1 py-2 px-4 font-semibold cursor-pointer ${activeTab === 'background' ? 'border-b-2 border-blue-500' : ''
              }`}
            onClick={() => setActiveTab('background')}
          >
            Background
          </li>
          <li
            className={`w-full md:w-auto py-2 px-4 font-semibold cursor-pointer ${activeTab === 'buttons' ? 'border-b-2 border-blue-500' : ''
              }`}
            onClick={() => setActiveTab('buttons')}
          >
            Buttons
          </li>
        </ul>

        {activeTab === 'text' && (
          <div className="p-4 bg-gray-900 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Gradient Class Preview</h2>
            <div className="space-y-4">
              <label htmlFor="gradient-type" className="font-medium">
                Select Gradient Type:
              </label>
              <select
                id="gradient-type"
                value={gradientType}
                onChange={handleTypeChange}
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
              >
                <option value="linear">Linear Gradient</option>
                <option value="radial">Radial Gradient</option>
                <option value="conic">Conic Gradient</option>
              </select>

              <label htmlFor="gradient-direction" className="font-medium">
                Select Gradient Direction:
              </label>
              <select
                id="gradient-direction"
                value={gradientDirection}
                onChange={handleDirectionChange}
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
              >
                {gradientType === 'radial' && (
                  <>
                    <option value="at center center">Radial Center</option>
                    <option value="at top center">Radial Top</option>
                    <option value="at left center">Radial Left</option>
                    <option value="at bottom center">Radial Bottom</option>
                    <option value="at right center">Radial Right</option>
                    <option value="at top left">Radial Top Left</option>
                    <option value="at top right">Radial Top Right</option>
                    <option value="at bottom right">Radial Bottom Right</option>
                    <option value="at bottom left">Radial Bottom Left</option>
                  </>
                )}

                {gradientType === 'conic' && (
                  <>
                    <option value="at center">Conic Center</option>
                    <option value="at top center">Conic Top</option>
                    <option value="at left center">Conic Left</option>
                    <option value="at bottom center">Conic Bottom</option>
                    <option value="at right center">Conic Right</option>
                    <option value="at top left">Conic Top Left</option>
                    <option value="at top right">Conic Top Right</option>
                    <option value="at bottom right">Conic Bottom Right</option>
                    <option value="at bottom left">Conic Bottom Left</option>
                  </>
                )}

                {(gradientType === 'linear' || gradientType === 'radial') && (
                  <>
                    <option value="to top">To Top</option>
                    <option value="to bottom">To Bottom</option>
                    <option value="to left">To Left</option>
                    <option value="to right">To Right</option>
                    <option value="to top left">To Top Left</option>
                    <option value="to top right">To Top Right</option>
                    <option value="to bottom left">To Bottom Left</option>
                    <option value="to bottom right">To Bottom Right</option>
                  </>
                )}
              </select>

              <div className="space-y-4">
                <label htmlFor="color-picker1" className="font-medium">
                  Color 1:
                </label>
                <input
                  type="color"
                  id="color-picker1"
                  value={colorStop1}
                  onChange={(e) => setColorStop1(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />

                <label htmlFor="color-picker2" className="font-medium">
                  Color 2:
                </label>
                <input
                  type="color"
                  id="color-picker2"
                  value={colorStop2}
                  onChange={(e) => setColorStop2(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />

                <label htmlFor="color-picker3" className="font-medium">
                  Color 3:
                </label>
                <input
                  type="color"
                  id="color-picker3"
                  value={colorStop3}
                  onChange={(e) => setColorStop3(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />
              </div>


              <h1
                className="text-4xl font-bold"
                style={{
                  backgroundImage: generateGradient(),
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Custom Gradient
              </h1>


              <pre className="bg-gray-700 p-4 rounded-lg">
                <code>{generateClassesPreview()}</code>
              </pre>
            </div>
          </div>



        )}












        {/* Content for Background Tab */}
        {activeTab === 'background' && (
          <div className="p-4 bg-gray-900 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Background Gradient Class Preview</h2>
            <div className="space-y-4">
              <label htmlFor="gradient-type" className="font-medium">
                Select Gradient Type:
              </label>
              <select
                id="gradient-type"
                value={gradientType}
                onChange={handleTypeChange}
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
              >
                <option value="linear">Linear Gradient</option>
                <option value="radial">Radial Gradient</option>
                <option value="conic">Conic Gradient</option>
              </select>

              <label htmlFor="gradient-direction" className="font-medium">
                Select Gradient Direction:
              </label>
              <select
                id="gradient-direction"
                value={gradientDirection}
                onChange={handleDirectionChange}
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
              >
                {gradientType === 'radial' && (
                  <>
                    <option value="at center center">Radial Center</option>
                    <option value="at top center">Radial Top</option>
                    <option value="at left center">Radial Left</option>
                    <option value="at bottom center">Radial Bottom</option>
                    <option value="at right center">Radial Right</option>
                    <option value="at top left">Radial Top Left</option>
                    <option value="at top right">Radial Top Right</option>
                    <option value="at bottom right">Radial Bottom Right</option>
                    <option value="at bottom left">Radial Bottom Left</option>
                  </>
                )}

                {gradientType === 'conic' && (
                  <>
                    <option value="at center">Conic Center</option>
                    <option value="at top center">Conic Top</option>
                    <option value="at left center">Conic Left</option>
                    <option value="at bottom center">Conic Bottom</option>
                    <option value="at right center">Conic Right</option>
                    <option value="at top left">Conic Top Left</option>
                    <option value="at top right">Conic Top Right</option>
                    <option value="at bottom right">Conic Bottom Right</option>
                    <option value="at bottom left">Conic Bottom Left</option>
                  </>
                )}

                {(gradientType === 'linear' || gradientType === 'radial') && (
                  <>
                    <option value="to top">To Top</option>
                    <option value="to bottom">To Bottom</option>
                    <option value="to left">To Left</option>
                    <option value="to right">To Right</option>
                    <option value="to top left">To Top Left</option>
                    <option value="to top right">To Top Right</option>
                    <option value="to bottom left">To Bottom Left</option>
                    <option value="to bottom right">To Bottom Right</option>
                  </>
                )}
              </select>

              <div className="space-y-4">
                <label htmlFor="color-picker1" className="font-medium">
                  Color 1:
                </label>
                <input
                  type="color"
                  id="color-picker1"
                  value={colorStop1}
                  onChange={(e) => setColorStop1(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />

                <label htmlFor="color-picker2" className="font-medium">
                  Color 2:
                </label>
                <input
                  type="color"
                  id="color-picker2"
                  value={colorStop2}
                  onChange={(e) => setColorStop2(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />

                <label htmlFor="color-picker3" className="font-medium">
                  Color 3:
                </label>
                <input
                  type="color"
                  id="color-picker3"
                  value={colorStop3}
                  onChange={(e) => setColorStop3(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />
              </div>

              <div
                style={{ width: '1200px', height: '400px', borderRadius: '10px', background: generateGradient() }}
                className="border border-gray-600"
              >
                {/* The gradient preview box will be dynamically updated with the selected colors */}
              </div>

              <pre className="bg-gray-700 p-4 rounded-lg">
                <code>{generateBackgroundClassesPreview()}</code>
              </pre>
            </div>
          </div>
        )}

















        {/* Content for Buttons Tab */}
        {activeTab === 'buttons' && (
          <div className="p-4 bg-gray-900 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Button Gradient Class Preview</h2>
            <div className="space-y-4">
              <label htmlFor="gradient-type" className="font-medium">
                Select Gradient Type:
              </label>
              <select
                id="gradient-type"
                value={gradientType}
                onChange={handleTypeChange}
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
              >
                <option value="linear">Linear Gradient</option>
                <option value="radial">Radial Gradient</option>
                <option value="conic">Conic Gradient</option>
              </select>

              <label htmlFor="gradient-direction" className="font-medium">
                Select Gradient Direction:
              </label>
              <select
                id="gradient-direction"
                value={gradientDirection}
                onChange={handleDirectionChange}
                className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
              >
                {gradientType === 'radial' && (
                  <>
                    <option value="at center center">Radial Center</option>
                    <option value="at top center">Radial Top</option>
                    <option value="at left center">Radial Left</option>
                    <option value="at bottom center">Radial Bottom</option>
                    <option value="at right center">Radial Right</option>
                    <option value="at top left">Radial Top Left</option>
                    <option value="at top right">Radial Top Right</option>
                    <option value="at bottom right">Radial Bottom Right</option>
                    <option value="at bottom left">Radial Bottom Left</option>
                  </>
                )}

                {gradientType === 'conic' && (
                  <>
                    <option value="at center">Conic Center</option>
                    <option value="at top center">Conic Top</option>
                    <option value="at left center">Conic Left</option>
                    <option value="at bottom center">Conic Bottom</option>
                    <option value="at right center">Conic Right</option>
                    <option value="at top left">Conic Top Left</option>
                    <option value="at top right">Conic Top Right</option>
                    <option value="at bottom right">Conic Bottom Right</option>
                    <option value="at bottom left">Conic Bottom Left</option>
                  </>
                )}

                {(gradientType === 'linear' || gradientType === 'radial') && (
                  <>
                    <option value="to top">To Top</option>
                    <option value="to bottom">To Bottom</option>
                    <option value="to left">To Left</option>
                    <option value="to right">To Right</option>
                    <option value="to top left">To Top Left</option>
                    <option value="to top right">To Top Right</option>
                    <option value="to bottom left">To Bottom Left</option>
                    <option value="to bottom right">To Bottom Right</option>
                  </>
                )}
              </select>

              <div className="space-y-4">
                <label htmlFor="color-picker1" className="font-medium">
                  Color 1:
                </label>
                <input
                  type="color"
                  id="color-picker1"
                  value={colorStop1}
                  onChange={(e) => setColorStop1(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />

                <label htmlFor="color-picker2" className="font-medium">
                  Color 2:
                </label>
                <input
                  type="color"
                  id="color-picker2"
                  value={colorStop2}
                  onChange={(e) => setColorStop2(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />

                <label htmlFor="color-picker3" className="font-medium">
                  Color 3:
                </label>
                <input
                  type="color"
                  id="color-picker3"
                  value={colorStop3}
                  onChange={(e) => setColorStop3(e.target.value)}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                />
              </div>

              <button
                style={{ width: '250px', height: '100px', borderRadius: '10px', background: generateGradient() }}
                className="border border-gray-600 mr-100"
              >
                Button
                {/* The gradient preview box will be dynamically updated with the selected colors */}
              </button>

              <pre className="bg-gray-700 p-4 rounded-lg">
                <code>{generateButtonClassesPreview()}</code>
              </pre>
            </div>
          </div>
        )}











        <div className="p-4 bg-gray-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Config Preview (config.tailwind.js)</h2>

          <pre>
            <code>{generateConfigCode()}</code>
          </pre>

        </div>
      </div>
    </div>
  );
};

export default CustomColorTool;




