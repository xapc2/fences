# Fence Diagrams XP
A useful web app based on [threejs](https://threejs.org/) to display 3d fence diagrams for geotechnical visualization.

View the live demo at [xapc2.github.io/fences](https://xapc2.github.io/fences).

## Screenshot
![Screenshot of the app](./images/screenshot.png "Fences app")

## Quick Start

### Navigation
+ **Rotate view:** Click and hold left mouse button.
+ **Pan view:** Click and hold right mouse button.
+ **Zoom in/out:** Scroll mouse wheel.

### Controls (menu)

The collapsible control menu contains all the actions allowed by the app. Those actions are organized in folders that can be closed individually by clicking on its name bar.

### Display Options
<dl>
<dt>Background:</dt> <dd>Change the background color by selecting from the dropdown menu one of the 6 colors available. The default background color is <em>seashell</em>.</dd>
<dt>Vertical Scale:</dt>  <dd>Type in the box or use the slider to change the vertical scale of the 3D model. The maximum vertical scale is 10 and the minimum is 0. The default value is 1.</dd>
<dt>Change colors:</dt> <dd> This button will open a dialog box with a dropdown menu to select one of the available color pallets or to change individual layer colors.</dd>
<dt>Show/hide boreholes:</dt> <dd> It is possible to hide all the boreholes from the scene. Simply uncheck the box named <em>visible</em> in the Boreholes folder.</dd>
<dt>Show/hide labels:</dt> <dd> Show or hide all the labels by clicking the checkbox named <em>Labels</em> in the Borehole folder.</dd>
<dt>Label size:</dt>  <dd>Type the value of the label font size or use the slider.</dd>
<dt>Borehole radius:</dt> <dd> Type the value or use the slider to change the radius of the boreholes. The default value is 1m.</dd>
<dt>Show/hide fences:</dt><dd>  To hide all the fences from the scene simply uncheck the box named <em>visible</em> in the Fences folder.</dd>
<dt>Opacity:</dt>  <dd>Change the opacity of the fences by typing the value or using the slider. The default value is 0.7.</dd>
<dt>Grid:</dt> <dd> Toogle on/off the grid helper by clicking on the box named <em>Show grid</em> in the Helpers folder.</dd>
<dt>Axes:</dt>  <dd>Toogle on/off the axes helper by clicking on the box named <em>Show axes</em> in the Helpers folder.</dd>
</dl>

### Editing the Project
<dl>
  <dt>Adding boreholes</dt><dd> To add a borehole, click on the button named <em>Add borehole</em> and fill the values in the form. The maximum number of layers for each borehole is 6.</dd>
  <dt>Removing boreholes</dt><dd>To delete a borehole, select the element by double clicking on it (it will turn yellow) and then click the <em>Remove borehole</em> button.</dd>
  <dt>Editing boreholes</dt><dd>To edit a borehole, select the element by double clicking on it (it will turn yellow) and then click the <em>Edit borehole</em> button. It is not possible to add or remove layers, only to change their thicknesses.</dd>
  <dt>Adding fences</dt><dd> To add a fence, first double-click on a borehole to select it. Then click the button named <em>Add fence</em>. Finally, select the second borehole to create the fence.</dd>
  <dt>Removing fences</dt><dd>To delete a fence, select the element by double clicking on it (it will turn yellow) and then click the <em>Remove fence</em> button.</dd>
</dl>

### Saving/loading a Project

It is possible to save the project locally as a `.json` file. To save the project, click on the button named <em>Load file... </em>

If you have previously saved a project and have the `.json` file on your computer, you can load the project by clicking the button named <em>Load file...</em>. 

The app can also load borehole data saved as a .csv (comma separated values) file. If the data is created/stored in a spreadsheet, it should be organized as this:
|name|x|y|z|h1|h2|h3|h4|
|-----|---|---|---|---|---|---|---|
| BH-1 | -10.5 | 0.0 | 12.2 | 2.3 | 3.7 | 2.1  | 4.5 |

The resulting text file should look like this:
```
name,x,y,z,h1,h2,h3,h4
BH-1,-10.5,0,12.2,2.3,3.7,2.1,4.5
```
