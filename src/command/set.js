import { writeFileContent, genConfig } from '../utils/common.js';
import chalk from 'chalk';
import ora from 'ora';
import path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const setCmd = {
  name: 'set <configName> [payload...]',
  description: '设置全局config.json配置',
  options: [],
  action: async (configName, payload, cmd) => {
    let set_spinner = ora();
    let config = await genConfig();
    let configItem = config[configName];
    if (configItem) {
      if (config.editableConfig.includes(configName)) {
        if (payload.length === 2) {
          let key = payload[0];
          if (!['account.key', 'account.appId'].includes(key)) {
            set_spinner.warn(`设置appId: th set translate appId <value>`);
            set_spinner.warn(`设置key: th set translate key <value>`);
            process.exit(1);
          }
          let value = payload[1];
          eval(`configItem.${key} = "${value}"`);
          // configItem[key] = value
          let configContent = JSON.stringify(config, null, 4);
          writeFileContent(
            path.resolve(__dirname, '../config.json'),
            configContent,
            (spinner, isOk) => {
              if (isOk) {
              } else {
                spinner.fail('配置失败');
              }
            }
          );
        } else {
          set_spinner.warn(`设置appId: th set translate account.appId <value>`);
          set_spinner.warn(`设置key: th set translate account.key <value>`);
          process.exit(1);
        }
      } else {
        log.error(`配置项[${chalk.red(configName)}]不允许修改`);
      }
    } else {
      log.error(`配置项[${chalk.red(configName)}]不存在`);
      process.exit(1);
    }
  },
};
