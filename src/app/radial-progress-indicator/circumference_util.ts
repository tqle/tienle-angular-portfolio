/**
 * Circumference Constant Util
 */
export class CircumferenceUtil {
    public static get RADIUS(): number {
        return 54;
    }
    public static get CIRCUMFERENCE(): number {
        return 2 * Math.PI * this.RADIUS;
    }
}
