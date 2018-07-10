/**
 * Circumference Constant Util
 */
export class CIRCUMFERENCE_CONST {
    public static get radius():number {
        return 54;
    }
    public static get circumference():number {
        return 2* Math.PI * this.radius;
    } 
}