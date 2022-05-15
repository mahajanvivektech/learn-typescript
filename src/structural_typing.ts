type User = { id: string };
type Product = { id: string };

let user: User = {id: 'user-1'};
let product: Product = {id: 'Product-1'};

user = product;
product = user;

type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number };

let point2D = {x: 0, y: 10};
let point3D = {x: 0, y: 10, z: 20};

/**
 * Extra info ok
 */
point2D = point3D;

/**
 * Also called duck typing
 * @param point
 */
function takesPoint2D(point: Point2D) {
  /**...*/
}
takesPoint2D(point3D);