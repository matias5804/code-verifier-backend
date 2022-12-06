/**
 * Basic JSON response for controllers
 */
export type BasicResponse = {
    message: string
} 

/**
 * Error JSON response for Controllers
 */
export type ErrorResponse = {
    error: string,
    message : string
}