<header class="symbol-info-header">    <h1 id="constant">Constant</h1>    <label class="symbol-info-type-label decorator">Decorator</label>      </header>
<section class="symbol-info">      <table class="is-full-width">        <tbody>        <tr>          <th>Module</th>          <td>            <div class="lang-typescript">                <span class="token keyword">import</span> { Constant }                 <span class="token keyword">from</span>                 <span class="token string">"ts-express-decorators/config"</span>                            </div>          </td>        </tr>        <tr>          <th>Source</th>          <td>            <a href="https://romakita.github.io/ts-express-decorators/#//blob/v2.15.3/src/config/decorators/constant.ts#L0-L0">                config/decorators/constant.ts            </a>        </td>        </tr>                </tbody>      </table>    </section>

### Overview

<pre><code class="typescript-lang">function <span class="token function">Constant</span><span class="token punctuation">(</span>expression<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> => <span class="token punctuation">{</span>
    get<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> => <span class="token keyword">any</span><span class="token punctuation">;</span>
    enumerable<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
    configurable<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> | undefined<span class="token punctuation">;</span>
</code></pre>

### Description

Return value from ServerSettingsService.

## Example

```typescript
import {Env} from "ts-express-decorators";

export class MyClass {

   @Constant("env")
   env: Env;

   @Value("swagger.path")
   swaggerPath: string;

}
```
