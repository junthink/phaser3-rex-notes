var GetDistance = Phaser.Math.Distance.Between;
var GetAngle = Phaser.Math.Angle.Between;
var NormalizeAngle = Phaser.Math.Angle.Normalize;

var OnTouchPad = function (pointer, localX, localY) {
    if (!this.enable) {
        return;
    }
    if (!pointer.isDown) {
        return;
    }
    var centerX = this.width / 2;
    if (GetDistance(centerX, centerX, localX, localY) > centerX) {
        return;
    }

    var endAngle = GetAngle(centerX, centerX, localX, localY);
    var deltaAngle = (this.anticlockwise) ? (this.startAngle - endAngle) : (endAngle - this.startAngle);
    var value = NormalizeAngle(deltaAngle) / (2 * Math.PI);

    if (this.easeValueDuration === 0) {
        this.value = value;
    } else {
        this.easeValueTo(value);
    }
}

export default OnTouchPad;