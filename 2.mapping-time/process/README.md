## Process

Description of the contents of this folder and the logic of your data → retinal variables mapping.

## Clock-1-position##
Second: the background color reflects the second's progress within a minute (0-60), using lerpColor function to create smooth animation;
Minute: the x position of the blue dot reflects the minute's progress with in an hour (0-24), using map function to map 0-24 to 0-CanvasWidth;
Hour: the x position of the green dot reflects the progress of hours (0-24);
The green line mimics the mental model of sun rising and setting;

## Clock-2-radial-hour ##
Second: every second the pale blue dot would be filled with a larger darker blue dot. The animation follows a counterclockwise direction;
Minute: the pie chart shows the progress of minute within an hour;
Hour: every dot represent an hour, the animation follows a clockwise direction;

## Clock-2-rotation ##
When the time unit is added with 1, the entire darker arcs would rotate 90 degree.
Second: every second the pale pink arc would be filled with a darker pink arc. The darker arcs also rotate 90 degree every second;
Minute: every minute the pale green arc would be filled with a darker green arc. The darker arcs rotate 90 degree every minute;
Hour: every hour the pale blue arc would be filled with a darker blue arc. The darker arcs rotate 90 degree every hour;

##longer-month&dateColor##
Day: Each square indicate a day, the number in total shows the current day of the month;
Month: each month is color coded, lerpColor map out the progress of the month

##longer-season&month##
Month: the red color fill shows the progress of the month;
Season: each Season is color coded, lerpColor map out the animation of the Season change

##longer-season&month##
Season: each Season is a different shape pattern and color;
Moon: the x and y position shows the fullness of the moon;

##Final-Clock##
Second: every second the pale blue dot would be filled with a larger darker blue dot. The animation follows a counterclockwise direction;
Minute: the pie chart shows the progress of minute within an hour;
Hour: every dot represent an hour, the animation follows a clockwise direction;
Month: each month is color coded, lerpColor map out the progress of the month;
Season: each Season is color coded, lerpColor map out the animation of the Season change;
Season: each rectangle's height is mapped out to show the progress of the current season;
