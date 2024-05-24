'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.plugin = void 0;
const utils_1 = require('@graphql-tools/utils');
const graphql_1 = require('graphql');
const print = (schema) => `
export const typeDefs = \`#graphql\n${schema}\n\`;
`;
const plugin = (schema) =>
  print(
    (0, graphql_1.stripIgnoredCharacters)(
      (0, utils_1.printSchemaWithDirectives)(schema)
    )
  );
exports.plugin = plugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC10eXBlZGVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQtdHlwZWRlZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQWlFO0FBQ2pFLHFDQUFnRTtBQUVoRSxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUM7c0NBQ0ksTUFBTTtDQUMzQyxDQUFDO0FBRUssTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFxQixFQUFFLEVBQUUsQ0FDOUMsS0FBSyxDQUFDLElBQUEsZ0NBQXNCLEVBQUMsSUFBQSxpQ0FBeUIsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEdEQsUUFBQSxNQUFNLFVBQ2dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpbnRTY2hlbWFXaXRoRGlyZWN0aXZlcyB9IGZyb20gXCJAZ3JhcGhxbC10b29scy91dGlsc1wiO1xuaW1wb3J0IHsgR3JhcGhRTFNjaGVtYSwgc3RyaXBJZ25vcmVkQ2hhcmFjdGVycyB9IGZyb20gXCJncmFwaHFsXCI7XG5cbmNvbnN0IHByaW50ID0gKHNjaGVtYTogc3RyaW5nKSA9PiBgXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBcXGAjZ3JhcGhxbFxcbiR7c2NoZW1hfVxcblxcYDtcbmA7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSAoc2NoZW1hOiBHcmFwaFFMU2NoZW1hKSA9PlxuICBwcmludChzdHJpcElnbm9yZWRDaGFyYWN0ZXJzKHByaW50U2NoZW1hV2l0aERpcmVjdGl2ZXMoc2NoZW1hKSkpO1xuIl19
