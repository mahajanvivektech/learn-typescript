"use strict";
let user = { id: 'user-1' };
let product = { id: 'Product-1' };
user = product;
product = user;
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
/**
 * Extra info ok
 */
point2D = point3D;
/**
 * Also called duck typing
 * @param point
 */
function takesPoint2D(point) {
    /**...*/
}
takesPoint2D(point3D);
