let booleanFlag = false;

exports.httpHandler = {
  endpoints: [
    {
      method: 'GET',
      path: 'debug',
      handle: function handle(ctx) {
// See https://www.jetbrains.com/help/youtrack/devportal-apps/apps-reference-http-handlers.html#request
        const requestParam = ctx.request.getParameter('test');
// See https://www.jetbrains.com/help/youtrack/devportal-apps/apps-reference-http-handlers.html#response
        ctx.response.json({test: requestParam});
      }
    },
    {
      method: 'GET',
      path: 'flag',
      handle: function handle(ctx) {
        ctx.response.json({ booleanSetting: booleanFlag });
      }
    },
    {
      method: 'POST',
      path: 'flag',
      handle: function handle(ctx) {
        const body = ctx.request.body;
        booleanFlag = body.booleanSetting;
        ctx.response.json({ success: true });
      }
    }
  ]
};
