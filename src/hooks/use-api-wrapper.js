import { useMutation, useQuery } from "react-query";
/**
 * @name use-api-wrapper
 * @author Yousef Ali
 * @summary This file will be containing all the handle methods for fetching data using all request methods.
 * @description As you can see in the file we are using react-query for fetching data.
 * @access private
 *
 * @function useQueryWrapper This is the main function to be re-used outside the file to call or fetch some data.
 * @function useMutationWrapper This is the main function to be re-used outside the file to call or fetch some data.
 * @readonly Please don't make any changes to this file.
 **/

/**
 * @description All API calls should be wrapped by this hook.
 * This will be returning the same object that a normal useQuery hook usage has.
 * We just added a layer to give rooms for uniform calls.
 */

/**
 * Use this on getting data related actions.
 * A query can be used with any Promise based method (including GET and POST methods)
 * to fetch data from a server. If your method modifies data on the server,
 * we recommend using Mutations instead.
 * https://react-query.tanstack.com/guides/queries
 *
 */
export function useQueryWrapper(identifier, apiFn, options) {
  return useQuery(identifier, apiFn, options);
}

/**
 * Unlike queries, mutations are typically used to create/update/delete data or perform server side effects.
 * https://react-query.tanstack.com/guides/mutations
 *
 */

export function useMutationWrapper(mutationFn, options) {
  return useMutation(mutationFn, options);
}
